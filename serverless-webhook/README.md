# Serverless webhook

This is a webhook to accept POST request call.  
  
### Create project

```
serverless create --template aws-nodejs --path {project_name}
```

### Modify serverless.yml

- Generate AWS Gateway API
	- https://serverless.com/framework/docs/providers/aws/events/apigateway/

### Deploy project

```
serverless deploy -v
```

### Usage

```
serverless logs --function cron --tail
```
