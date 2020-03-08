import http from 'k6/http'; 

export let options = { maxRedirects: 4,   stages: [
  { duration: '5s', target: 1 }, // below normal load
  { duration: '5s', target: 1 },
  { duration: '5s', target: 2 }, // normal load
  { duration: '5s', target: 2 },
  { duration: '5s', target: 3 }, // around the breaking point
  { duration: '5s', target: 3 },
  { duration: '5s', target: 4 }, // beyond the breaking point
  { duration: '5s', target: 4 },
  { duration: '5s', target: 0 }, // scale down. Recovery stage.
] };

export default function() {
  let res = http.get("http://test.k6.io/");
  check(res, {
    "is status 200": r => r.status === 200
  });
}