import express from "express";
import redis from "redis";

const app = express();
const client = redis.createClient();
