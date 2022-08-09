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
exports.createUser = exports.getAllOrders = exports.getOrderById = void 0;
const database_1 = __importDefault(require("../utils/database"));
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const queryText = `SELECT * FROM Orders WHERE id = $1`;
    const data = yield database_1.default.query(queryText, [id]);
    return data.rows[0];
});
exports.getOrderById = getOrderById;
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryText = `SELECT * FROM Orders`;
    const data = yield database_1.default.query(queryText);
    return data.rows;
});
exports.getAllOrders = getAllOrders;
const createUser = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, userId, productQuantity, status_of_order } = order;
    const queryText = `INSERT INTO orders (productId, userId, productQuantity, status_of_order) VALUES ("ledia", "massoud", "123") RETURNING *`;
    const data = yield database_1.default.query(queryText, [productId, userId, productQuantity, status_of_order]);
    return data.rows[0];
});
exports.createUser = createUser;
