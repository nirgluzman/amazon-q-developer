#
# Lambda function to handle messages
#

module "lambda_function" {
  source  = "terraform-aws-modules/lambda/aws" # Community module for Lambda functions
  version = "~> 8.0"                           # Pin to major version for stability

  # Function configuration
  function_name  = "handle_messages"
  handler        = "dist/index.handler"
  runtime        = "nodejs24.x"
  memory_size    = 128
  timeout        = 6

  # Source code packaging configuration
  # Build must be run manually before terraform apply: cd ../functions/handle_messages && npm ci && npm run build && npm prune --omit=dev
  # Patterns: Include only dist/index.js, package.json, and node_modules/@aws-sdk in the Lambda zip
  # Note: The module automatically zips the filtered files and uploads to Lambda (no manual zip needed)
  source_path = [
    {
      path = "${path.module}/../functions/handle_messages"
      patterns = [
        "!src",
        "!build\\.js",
        "!tsconfig\\.json",
        "!package-lock\\.json",
        "!README\\.md",
        "!node_modules",
        "dist/index\\.js",
        "package\\.json",
        "node_modules/@aws-sdk"
      ]
    }
  ]

  # Versioning configuration
  publish = true
  create_current_version_allowed_triggers = false
  create_unqualified_alias_allowed_triggers = true

  # Environment variables for the Lambda function
  environment_variables = {
    MESSAGES_BUCKET = module.s3_bucket.s3_bucket_id
  }

  # IAM policy for S3 access
  attach_policy_json = true
  policy_json = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:ListBucket",
          "s3:PutObject"
        ]
        Resource = [
          module.s3_bucket.s3_bucket_arn,
          "${module.s3_bucket.s3_bucket_arn}/*"
        ]
      }
    ]
  })

  # Lambda trigger permissions - allows API Gateway to invoke this Lambda function
  allowed_triggers = {
    APIGatewayGet = {
      service    = "apigateway"
      source_arn = "${module.api_gateway.api_execution_arn}/${var.stage_name}/GET/messages"
    }
    APIGatewayPost = {
      service    = "apigateway"
      source_arn = "${module.api_gateway.api_execution_arn}/${var.stage_name}/POST/messages"
    }
  }

  # CloudWatch Logs retention to control costs
  cloudwatch_logs_retention_in_days = 1
}
