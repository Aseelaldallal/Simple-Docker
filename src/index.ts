import express from "express";
import redis from "redis";

const app = express();
const client = redis.createClient({
  // Usually we put in address here. We are using docker compose,
  // so we can use service name
  host: "redis-server",
  port: 6379
});
client.set("visits", "0");

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", (+visits + 1).toString());
  });
});

app.listen(8081, () => {
  console.log("Listening on 8081");
});
