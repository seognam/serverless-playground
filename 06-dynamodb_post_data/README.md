## Deploying

* Delploy the whole service
```bash
$ serverless deploy
...
endpoints:
  GET - https://slko7li7b0.execute-api.us-east-1.amazonaws.com/dev/todos/{id}
...
```


## Serverless Commands

* run our HTTP endpoint
```bash
$ curl https://slko7li7b0.execute-api.us-east-1.amazonaws.com/dev/todos/26728f4b-a6c9-428f-923b-241bcd3b6b7e
{"id":"26728f4b-a6c9-428f-923b-241bcd3b6b7e","checked":false,"text":"learn serverless"}
```
