"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = exports.getUserById = void 0;
const database_1 = __importDefault(require("../utils/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryText = `SELECT * FROM users WHERE id = $1`;
    const data = yield database_1.default.query(queryText, [id]);
    return data.rows[0];
});
exports.getUserById = getUserById;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryText = `SELECT * FROM users`;
    const data = yield database_1.default.query(queryText);
    return data.rows;
});
exports.getAllUsers = getAllUsers;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, password } = user;
    const queryText = `INSERT INTO users (firstName, lastName, password) VALUES ("ledia", "massoud", "123") RETURNING *`;
    const hashpassword = bcrypt_1.default.hashSync(password + "PEPPER", parseInt(String(process.env.SALT_ROUNDS)));
    const data = yield database_1.default.query(queryText, [firstName, lastName, hashpassword]);
    return data.rows[0];
});
exports.createUser = createUser;
// export const createUser = async(u: User): Promise<User> {
//     try {
//         // @ts-ignore
//         const conn = await Client.connect()
//         const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *'
//     const hash = bcrypt.hashSync(
//         u.password + pepper, 
//         parseInt(saltRounds)
//       );
//       const result = await conn.query(sql, [u.username, hash])
//       const user = result.rows[0]
//       conn.release()
//       return user
//     } catch(err) {
//       throw new Error(`unable create user (${u.username}): ${err}`)
//     } 
//   }
