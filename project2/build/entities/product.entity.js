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
exports.createProduct = exports.getAllProduct = exports.getProductById = void 0;
const database_1 = __importDefault(require("../utils/database"));
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryText = `SELECT * FROM Product WHERE id = $id`;
    const data = yield database_1.default.query(queryText, [id]);
    return data.rows[0];
});
exports.getProductById = getProductById;
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryText = `SELECT * FROM Product`;
    const data = yield database_1.default.query(queryText);
    return data.rows;
});
exports.getAllProduct = getAllProduct;
const createProduct = (Product) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, category } = Product;
    const queryText = `INSERT INTO Product (name, price, category) VALUES (?, ?, ?) RETURNING *`;
    //console.log("query of create product ---   " + queryText);
    const data = yield database_1.default.query(queryText, [name, price, category]);
    //console.log("data of create product ---   " + data);
    return data.rows[0];
});
exports.createProduct = createProduct;
