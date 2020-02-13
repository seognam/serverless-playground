# Sandbox for experimenting with node `serverless` + AWS lambda

## Install node `serverless` and `awscli` to run the examples in the sub-directories
```bash
$ npm install -g serverless
$ brew install awscli

$ aws configure
# create aws user & insert their secret keys
# guide: https://www.notion.so/Create-AWS-User-to-Get-Access-key-ID-Secret-Access-Key-a55e0f869b1c486ca6f447e7e3cb386a
...
AWS Access Key ID [None]: AKIAWNHUID564FZLT364
AWS Secret Access Key [None]: <secretkey>
Default region name [None]:
Default output format [None]:
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

## Deploying

* Overwrite / Deploy a single function (instead of the whole service)
```bash
sls deploy function --function helloWorld
```

## Notes (my understanding right now)

- You must create a serverless.yml file that tells npm `serverless` what to run

- a handler file must export a `run` func
    - You can debug your function with --debug and adding `console.log` statements
