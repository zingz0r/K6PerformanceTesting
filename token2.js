var server       = "http://localhost:8080";
var realm        = "master";
var grantType    = "client_credentials";
var clientId     = "test";
var clientSecret = "9dc03e84-6f43-4616-a24c-6cf9a54aabe2";

var consturl  = `${server}/auth/realms/${realm}/protocol/openid-connect/token`;
var data = `grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}`;

console.log("1");

sendPostRequest(12345)
    .then((data) => {
        console.log("data from  postRequest ", data)
    })
    .catch((error) =>  {
		console.log("error: ", error)
	})

// function that retuns a Promise
function sendPostRequest(id) {
    console.log("2");

    return new Promise(
        resolve => {
            const postReq = {
                url: consturl,
                method: 'POST',
                header: { 'Content-Type': 'application/x-www-form-urlencoded'},
                body: {
                    mode: 'raw',
                    raw: data
                }
            };

            pm.sendRequest(postReq, function(err, res) {
                if (err) {
                    console.error(err);
                    return;
                }
                return resolve( res.json());
            });
        });
}