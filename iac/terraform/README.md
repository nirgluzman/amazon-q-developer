# Messages API Infrastructure

Serverless REST API for managing messages using AWS API Gateway, Lambda, and S3.

## Architecture

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │ HTTP
       ▼
┌─────────────────────────┐
│  API Gateway (HTTP v2)  │
│  - GET /messages        │
│  - POST /messages       │
└──────────┬──────────────┘
           │ AWS_PROXY
           ▼
    ┌──────────────┐
    │    Lambda    │
    │ handle_msgs  │
    └──────┬───────┘
           │ IAM Role
           ▼
    ┌──────────────┐
    │  S3 Bucket   │
    │   messages   │
    └──────────────┘
```

## Resources

| Resource | Purpose |
|----------|---------|
| **API Gateway HTTP** | Exposes REST endpoints for GET/POST operations |
| **Lambda Function** | Node.js handler using AWS SDK v3 for S3 operations |
| **S3 Bucket** | Stores messages as JSON files with timestamp keys |

## Configuration

### Variables
- `aws_region` - AWS region (default: `eu-central-1`)
- `stage_name` - Deployment stage (default: `dev`)

### Lambda Environment
- `AWS_REGION` - AWS region for S3 client
- `MESSAGES_BUCKET` - S3 bucket name for message storage

### Lambda Permissions
- **S3 Access**: `s3:ListBucket`, `s3:PutObject`
- **API Gateway Trigger**: GET/POST on `/messages`

### S3 Settings
- **Object Ownership**: `BucketOwnerEnforced`
- **Storage Path**: `messages/{timestamp}.json`

## Deployment

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

## Outputs

- `aws_region` - Deployment region
- `stage_name` - Environment stage
- `api_gateway_url` - API endpoint URL

## API Usage

**GET /messages** - List all messages
```bash
curl https://{api_gateway_url}/messages
```

**POST /messages** - Create new message
```bash
curl -X POST https://{api_gateway_url}/messages \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello World"}'
```
