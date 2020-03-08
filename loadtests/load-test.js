import http from 'k6/http'; 

export let options = { maxRedirects: 4, vus: 10, duration: '10s' };

export default function() {
  http.get('https://www.tothnet.hu');
}