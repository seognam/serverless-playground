## Deploying

* Delploy the whole service
```bash
$ serverless deploy
...
Serverless: Stack update finished...
Service Information
service: my-app
stage: dev
region: us-east-1
stack: my-app-dev
resources: 10
api keys:
  None
endpoints:
  GET - https://6gy5evziwi.execute-api.us-east-1.amazonaws.com/dev/
functions:
  helloWorld: my-app-dev-helloWorld
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
```


## Serverless Commands

* run our HTTP endpoint
```bash
$ curl https://6gy5evziwi.execute-api.us-east-1.amazonaws.com/dev/
{"message":"Hello world HTTP"}
```