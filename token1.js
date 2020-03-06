var server       = "http://localhost:8080";
var realm        = "master";
var grantType    = "client_credentials";
var clientId     = "test";
var clientSecret = "9dc03e84-6f43-4616-a24c-6cf9a54aabe2";

var url  = `${server}/auth/realms/${realm}/protocol/openid-connect/token`;
var data = `grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}`;

pm.sendRequest({
    url: url,
    method: 'POST',
    header: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: {
        mode: 'raw',
        raw: data
    }
},  function(err, response) {
    
    var response_json = response.json();
    var token = response_json.access_token;
    pm.environment.set('token', token);
    console.log(token);
});