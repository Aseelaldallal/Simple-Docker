"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var redis_1 = __importDefault(require("redis"));
var app = express_1.default();
var client = redis_1.default.createClient({
    // Usually we put in address here. We are using docker compose,
    // so we can use service name
    host: "redis-server",
    port: 6379
});
client.set("visits", "0");
app.get("/", function (req, res) {
    process.exit(0);
    client.get("visits", function (err, visits) {
        res.send("Number of visits is " + visits);
        client.set("visits", (+visits + 1).toString());
    });
});
app.listen(8081, function () {
    console.log("This is me");
});
