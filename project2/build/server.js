"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_entity_1 = require("./entities/product.entity");
const user_entity_1 = require("./entities/user.entity");
const order_entity_1 = require("./entities/order.entity");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// const orderRoutes = (app: express.Application) => {
//     app.get('/orders', index)
//     app.get('/orders/:id', show)
//     app.post('/orders', create)
//     // add product
//     app.post('/orders/:id/products', addProduct)
// }
//API Endpoints **Example**: A SHOW route: 'blogs/:id' [GET] 
//Index: show all products
app.get('/Products', function (req, res) {
    res.send('show products\n   ' + (0, product_entity_1.getAllProduct)());
});
//get product by id or Index
app.get('/Products/id', function (req, res) {
    let id = 0;
    id = Number(req.query.id);
    console.log("id------------------------------------ " + id);
    const product = (0, product_entity_1.getProductById)(id);
    res.send(product);
});
//create product
app.get('/add_product', function (req, res) {
    let name = String(req.query.name);
    let price = Number(req.query.price);
    let category = String(req.query.category);
    let P = { name, price, category };
    (0, product_entity_1.createProduct)(P);
    res.send("new product added  " + P);
});
//user
//Index [token required]
app.get('/user', (req, res) => {
    try {
        res.send('show users\n   ' + (0, user_entity_1.getAllUsers)());
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Show [token required]
app.get('/user/:id', (req, res) => {
    try {
        let id = 0;
        id = Number(req.query.id);
        const user = (0, user_entity_1.getUserById)(id);
        res.send(user);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Create user
app.get('/add_user', function (req, res) {
    let fname = String(req.body.fname);
    let lname = String(req.body.lname);
    let password = String(req.body.password);
    // let u: User = {fname, lname, password };    
    // createUser(u);
    res.send("new user added  " + fname + "   --- " + lname + "   ---  " + password);
});
//order
//Index [token required]
app.get('/order', (req, res) => {
    try {
        res.send('show orders\n   ' + (0, order_entity_1.getAllOrders)());
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Show [token required]
app.get('/order/:id', (req, res) => {
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
//Create order
app.get('/add_order', function (req, res) {
    let productId = Number(req.query.productId);
    let userId = Number(req.query.userId);
    let productQuantity = Number(req.query.productQuantity);
    let status_of_order = String(req.query.status_of_order);
    let order = { productId, userId, productQuantity, status_of_order };
    (0, order_entity_1.createOrder)(order);
    res.send("new user added  " + order);
});
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
