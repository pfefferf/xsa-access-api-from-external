# Test external Access to XS Advanced API using OAuth

## Info
Can be done e.g. by using the Cloudfoundry UAA Password Grant with Client and User Credentials: POST /oauth/token
[Official Documentation](https://github.com/cloudfoundry/uaa/blob/develop/docs/UAA-APIs.rst)

## Get required information (e.g. UAA auth server URL, client id, client secret)
Via XS CLI.
![](./doc/img/01_xs_env.png)

Or XSA Cockpit
![](./doc/img/02_xsa_cockpit_env.png)

## Get Access Token
![](./doc/img/03_postman_access_token_req_headers.png)

![](./doc/img/04_postman_access_token_req_body_and_result.png)

## Call API with access token
Success
![](./doc/img/05_call_api_success.png)

Error
![](./doc/img/06_call_api_error.png)