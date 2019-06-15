# Aws lambda with express and typescript <3

This is just setup to run aws lambda with express and the lovely typescript

The idea is work the app as regular express-ts app and then compile and deploy to aws lambda

# serverless
I recommend you read about serverless [here](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)


## Install
just run `npm install`

## Running in local with typescript
It will run only express with typescript.
```
npm run dev
```
the project files are in `src` folder and runs with `ts-node` by default

visit `http://localhost:7500/hello`

## serverless
Running `serverless-offline`
1. Compile typescript files in to javascript files in to `/dist` folder
```
tsc
```
2. launch serverless offline
```
npm run sls
```
3. visit `http://localhost:7500/hello`

## Deploy files to lambda
Just run 
```
slsl deploy -v
```

Enjoy!!!


