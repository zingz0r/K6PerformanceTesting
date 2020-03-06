# Preformance testing with K6 and Keycloak

- Set the `server`, `realm`, `grantType`, `clientId`, `clientSecret` variables in the collection
- Create a `token` variable with no data to the collection
- Add the following script into your collections Pre-request scripts:

```javascript
if (pm.variables.get("token") === undefined) {
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
}
```

- Add authentication "Bearer token" to the collection and set the token to `{{token}}`
- Export collection as `collection.json`
- Start `runstest.bat` to begin the performance test
