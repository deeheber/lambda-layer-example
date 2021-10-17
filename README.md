# lambda-layer-example
This is a very simple stack to test out Lambda layers both in the cloud and via `sam local invoke`.

## Deploy directions
The `master` branch has been updated to use the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) for deployment while the other branches are still here to correspond with the legacy [Stackery blog post](http://danielleheberling.xyz/blog/lambda-layer-update).

1. `sam build`
2. `sam deploy --guided`
