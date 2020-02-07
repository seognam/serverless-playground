## Deploying

* Delploy the whole service
```bash
$ serverless deploy
```

* Overwrite / Deploy a single function (instead of the whole service):
```bash
$ sls deploy function --function helloWorld
```




## Serverless Commands

* run our function with debugging
```bash
serverless invoke --function helloWorld --log
```

* return past logs for our function
```bash
serverless logs --function helloWorld
```