# Test external Access to XS Advanced API using OAuth

# request access token (including uaa.user scope)
POST https://hxehost:39032/uaa-security/oauth/token

Headers
Accept: application/json;charset=utf-8
Content-Type: application/x-www-form-urlencoded
Authorization: Basic Y2Y6

Body (form encoded)
grant_type=password
username=<user>
password=<password>


# request authorization code
GET https://hxehost:39032/uaa-security/oauth/authorize?response_type=code&client_id=sb-na-c1517b0b-7eb1-426e-9ac0-315bdbd8f1d4&state=dummy&redirect_uri=http://localhost:8080/dummy
authorization header: Bearer uaa.user