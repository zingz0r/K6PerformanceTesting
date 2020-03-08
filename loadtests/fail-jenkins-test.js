import http from 'k6/http'; 

export let options = { maxRedirects: 4, vus: 10, duration: '10s' };

export default function() {
  let res = http.get("http://test.k6.io/");
  check(res, {
    "is status 200": r => r.status === 999999 // shouldnt return 999999
  });
}