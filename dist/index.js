"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hi");
var express_1 = __importDefault(require("express"));
var redis_1 = __importDefault(require("redis"));
var app = express_1.default();
var client = redis_1.default.createClient();
