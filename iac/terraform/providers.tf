# https://registry.terraform.io/providers/hashicorp/aws/latest
# https://registry.terraform.io/providers/hashicorp/random/latest
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 6.0"
    }
    random = {
      source = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  # Configuration options
  region = var.aws_region

  # Apply default tags to all resources
  default_tags {
    tags = {
      Terraform   = "true"         # Mark resources as managed by Terraform
      Environment = var.stage_name # Tag with environment/stage name
    }
  }
}
