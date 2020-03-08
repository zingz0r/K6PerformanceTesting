import http from 'k6/http'; 
import { check } from "k6";

export let options = { maxRedirects: 4, vus: 10, duration: '10s',
thresholds: {
  http_req_duration: ["p(95)<1"]
} };

export default function() {
  let res = http.get("http://test.k6.io/");
  check(res, {
    "is status 200": r => r.status === 999999 // shouldnt return 999999
  });
}