"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const database_config_1 = __importDefault(require("../config/database.config"));
dotenv_1.default.config();
const db = new pg_1.Pool({
    host: database_config_1.default.host,
    port: database_config_1.default.port,
    user: database_config_1.default.user,
    password: database_config_1.default.password,
    database: database_config_1.default.database
});
exports.default = db;
