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