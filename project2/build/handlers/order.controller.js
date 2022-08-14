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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.show = exports.index = void 0;
const order_entity_1 = require("../entities/order.entity");
//order
//Index [token required]
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('show orders\n   ' + (0, order_entity_1.getAllOrders)());
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.index = index;
//Show [token required]
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = 0;
        id = Number(req.query.id);
        const order = (0, order_entity_1.getOrderById)(id);
        res.send(order);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.show = show;
//Create order
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productId = Number(req.query.productId);
    let userId = Number(req.query.userId);
    let productQuantity = Number(req.query.productQuantity);
    let status_of_order = String(req.query.status_of_order);
    let order = { productId, userId, productQuantity, status_of_order };
    (0, order_entity_1.createOrder)(order);
    res.send("new user added  " + order);
});
exports.create = create;
