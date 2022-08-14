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
exports.create = exports.index = exports.show = void 0;
const product_entity_1 = require("../entities/product.entity");
//Index: show all products
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('show products\n   ' + (0, product_entity_1.getAllProduct)());
});
exports.show = show;
//get product by id or Index
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = 0;
    id = Number(req.query.id);
    console.log("id------------------------------------ " + id);
    const product = (0, product_entity_1.getProductById)(id);
    res.send(product);
});
exports.index = index;
//create product
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let name = String(req.query.name);
    let price = Number(req.query.price);
    let category = String(req.query.category);
    let P = { name, price, category };
    (0, product_entity_1.createProduct)(P);
    res.send("new product added  " + P);
});
exports.create = create;
