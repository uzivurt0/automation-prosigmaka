import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 20,
  stages: [
    { duration: "10s", target: 10 },
    { duration: "3s", target: 20 },
    { duration: "5s", target: 25 },
    { duration: "5s", target: 0 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["avg<650", "p(90)<1000"],
    iterations: ["count>400"],
  },
};

export default function () {
  const res = http.get("https://www.apple.com/id/");
  check(res, { "responsenya harus 200": (r) => r.status === 200 });
}
