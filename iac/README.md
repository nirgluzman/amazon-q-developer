# Infrastructure as Code (IaC)

## Project Structure

```
iac/
├── functions/
│   └── handle_messages/
│       ├── src/
│       │   └── index.ts          # Lambda handler (TypeScript)
│       ├── build.js              # Build script
│       ├── package.json
│       ├── package-lock.json
│       ├── tsconfig.json
│       └── .gitignore
├── terraform/
│   ├── apigw.tf                  # API Gateway configuration
│   ├── lambda.tf                 # Lambda function setup
│   ├── s3.tf                     # S3 bucket configuration
│   ├── providers.tf              # AWS provider settings
│   ├── variables.tf              # Input variables
│   ├── outputs.tf                # Output values
│   └── README.md                 # Terraform documentation
├── test.http                     # API test requests
├── .gitignore
└── README.md
```

## Deployment

### Prerequisites
Build Lambda function before deploying:
```bash
cd functions/handle_messages
npm ci
npm run build
npm prune --omit=dev
```

### Deploy Infrastructure
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

## Known Issues

### Lambda Module Packaging Error on Windows
The Terraform AWS Lambda module may fail with "BuildPlanManager.plan() should be called first" error when using `commands` with `patterns` in `source_path`.

**Solution**: Pre-build the Lambda function manually (see Prerequisites) instead of using automated `commands` in the module configuration.
