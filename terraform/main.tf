# Configure Terraform and AWS provider
terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure AWS provider to use your personal profile
provider "aws" {
  region  = "us-east-1"
  profile = "personal"
}

# Route 53 Hosted Zone
resource "aws_route53_zone" "main" {
  name = "khurramjiwani.com"
  
  tags = {
    Name        = "Portfolio Domain"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# SSL Certificate
resource "aws_acm_certificate" "portfolio" {
  domain_name       = "khurramjiwani.com"
  validation_method = "DNS"

  tags = {
    Name        = "Portfolio SSL Certificate"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }

  lifecycle {
    create_before_destroy = true
  }
}

# Certificate Validation Record
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.portfolio.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 300
  type            = each.value.type
  zone_id         = aws_route53_zone.main.zone_id
}

# Application Load Balancer
resource "aws_lb" "portfolio" {
  name               = "portfolio-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.portfolio.id]
  subnets            = ["subnet-00ef1a33ad6a6353f", "subnet-07f17cf8d35cf9438"]

  enable_deletion_protection = false

  tags = {
    Name        = "Portfolio ALB"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# Target Group
resource "aws_lb_target_group" "portfolio" {
  name        = "portfolio-target-group"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = "vpc-0bb39bc7184f71345"
  target_type = "ip"

  health_check {
    enabled             = true
    healthy_threshold   = 2
    unhealthy_threshold = 3
    timeout             = 5
    interval            = 30
    path                = "/"
    protocol            = "HTTP"
  }

  tags = {
    Name        = "Portfolio Target Group"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# HTTPS Listener
resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.portfolio.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.portfolio.arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.portfolio.arn
  }

  tags = {
    Name        = "Portfolio HTTPS Listener"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# HTTP Listener (redirects to HTTPS)
resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.portfolio.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }

  tags = {
    Name        = "Portfolio HTTP Listener"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# Security Group for ALB and ECS
resource "aws_security_group" "portfolio" {
  name        = "personal-portfolio-sg"
  description = "Security group for personal portfolio"  # Must match existing
  vpc_id      = "vpc-0bb39bc7184f71345"

  # HTTP - no description (to match existing)
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTPS - no description (to match existing)
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Container port - no description (to match existing)
  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # All outbound traffic - no description (to match existing)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "Portfolio Security Group"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# A Record pointing domain to ALB
resource "aws_route53_record" "portfolio" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "khurramjiwani.com"
  type    = "A"

  alias {
    name                   = aws_lb.portfolio.dns_name
    zone_id                = aws_lb.portfolio.zone_id
    evaluate_target_health = true
  }
}

# ECR Repository
resource "aws_ecr_repository" "portfolio" {
  name                 = "personal-portfolio"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }

  tags = {
    Name        = "Portfolio Container Registry"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# ECS Cluster
resource "aws_ecs_cluster" "portfolio" {
  name = "personal-portfolio-cluster"

  tags = {
    Name        = "Portfolio ECS Cluster"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# IAM Role for ECS Task Execution
resource "aws_iam_role" "ecs_task_execution" {
  name = "ecsTaskExecutionRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name        = "ECS Task Execution Role"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# Attach AWS managed policy to IAM role
resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# Attach CloudWatch Logs policy
resource "aws_iam_role_policy" "ecs_cloudwatch_logs" {
  name = "CloudWatchLogsPolicy"
  role = aws_iam_role.ecs_task_execution.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "*"
      }
    ]
  })
}

# ECS Task Definition
resource "aws_ecs_task_definition" "portfolio" {
  family                   = "personal-portfolio"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([
    {
      name      = "personal-portfolio"
      image     = "${aws_ecr_repository.portfolio.repository_url}:latest"
      cpu       = 0
      essential = true

      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
          protocol      = "tcp"
        }
      ]

      environment = []
      mountPoints = []
      volumesFrom = []

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = "/ecs/personal-portfolio"
          "awslogs-create-group"  = "true"
          "awslogs-region"        = "us-east-1"
          "awslogs-stream-prefix" = "ecs"
        }
      }

      systemControls = []
    }
  ])

  tags = {
    Name        = "Portfolio Task Definition"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}

# ECS Service
resource "aws_ecs_service" "portfolio" {
  name                               = "personal-portfolio-service"
  cluster                            = aws_ecs_cluster.portfolio.id
  task_definition                    = aws_ecs_task_definition.portfolio.arn
  desired_count                      = 1
  launch_type                        = "FARGATE"
  platform_version                   = "LATEST"
  health_check_grace_period_seconds  = 60
  scheduling_strategy                = "REPLICA"
  enable_ecs_managed_tags            = false
  propagate_tags                     = "NONE"
  enable_execute_command             = false

  network_configuration {
    subnets          = ["subnet-00ef1a33ad6a6353f", "subnet-07f17cf8d35cf9438"]
    security_groups  = [aws_security_group.portfolio.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.portfolio.arn
    container_name   = "personal-portfolio"
    container_port   = 3000
  }

  deployment_circuit_breaker {
    enable   = false
    rollback = false
  }

  tags = {
    Name        = "Portfolio ECS Service"
    Environment = "Production"
    ManagedBy   = "Terraform"
  }
}