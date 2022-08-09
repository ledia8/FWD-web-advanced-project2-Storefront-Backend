"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ENV = process.env.ENV;
let database;
switch (process.env.ENV) {
    case 'test':
        database = process.env.DB_NAME_TEST;
        break;
    case 'production':
        database = process.env.DB_NAME;
        break;
    default:
        database = process.env.DB_NAME;
        break;
}
const dbConfig = {
    host: (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : 'localhost',
    port: (_b = Number(process.env.DB_PORT)) !== null && _b !== void 0 ? _b : 3000,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database
};
exports.default = dbConfig;
