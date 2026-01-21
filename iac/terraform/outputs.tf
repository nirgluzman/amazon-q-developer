#
# Terraform outputs - values that are displayed after deployment.
#

# AWS region - where resources are deployed
output "aws_region" {
  description = "AWS region"
  value       = var.aws_region
}

# Stage name - identifies the deployment environment (dev, prod, etc.)
output "stage_name" {
  description = "Stage name"
  value       = var.stage_name
}

# API Gateway URL - base URL for all API endpoints
output "api_gateway_url" {
  description = "URL of the API Gateway"
  value       = module.api_gateway.stage_invoke_url
}
