var url = `${pm.variables.get("server")}/auth/realms/${pm.variables.get("realm")}/protocol/openid-connect/token`;
    
var payload = {
  grant_type: pm.variables.get("grantType"),
  client_id: pm.variables.get("clientId"),
  client_secret: pm.variables.get("clientSecret")
};

var params = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

var kcResult = http.post(url, payload, params);
var jsonResult = JSON.parse(kcResult.body);
pm.environment.set('token', jsonResult.access_token);