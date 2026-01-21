#
# Variables that can be overridden via CLI commands.
#

# AWS region to deploy resources into
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-central-1"
}

# Environment/stage identifier for resource naming and tagging
variable "stage_name" {
  description = "Stage name (e.g. dev, prod)"
  type        = string
  default     = "dev"
}
