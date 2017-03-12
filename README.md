## Serverless Projects

Using serverless framework to run each project on AWS Lambda.

#### Usage

```
# Install
npm i -g serverless

# Deploy
serverless deploy -v

# Remove 
serverless remove
```

### Serverless-webhook

#### Introduce
This is a project that create a Restful POST API to get any response from client side, and log the response on AWS.  

#### AWS Services
- AWS API Gateway
- AWS Lambda

### Serverless-scheduler

#### Introduce
This is a scheduler project that run per 10 mins.

#### AWS Services
- AWS Lambda
- AWS CloudWatch
