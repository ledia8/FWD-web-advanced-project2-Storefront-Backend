"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var product_entity_1 = require("./entities/product.entity");
var user_entity_1 = require("./entities/user.entity");
var order_entity_1 = require("./entities/order.entity");
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].json());
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
    var id = 0;
    id = Number(req.query.id);
    console.log("id------------------------------------ " + id);
    var product = (0, product_entity_1.getProductById)(id);
    res.send(product);
});
//create product
app.get('/add_product', function (req, res) {
    var name = String(req.query.name);
    var price = Number(req.query.price);
    var category = String(req.query.category);
    var P = { name: name, price: price, category: category };
    (0, product_entity_1.createProduct)(P);
    res.send("new product added  " + P);
});
//user
//Index [token required]
app.get('/user', function (req, res) {
    try {
        res.send('show users\n   ' + (0, user_entity_1.getAllUsers)());
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Show [token required]
app.get('/user/:id', function (req, res) {
    try {
        var id = 0;
        id = Number(req.query.id);
        var user = (0, user_entity_1.getUserById)(id);
        res.send(user);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Create user
app.get('/add_user', function (req, res) {
    var fname = String(req.query.fname);
    var lname = String(req.body.lname);
    var password = String(req.body.password);
    // let u: User = {fname, lname, password };    
    // createUser(u);
    res.send("new user added  " + fname + "   --- " + lname + "   ---  " + password);
});
//order
//Index [token required]
app.get('/order', function (req, res) {
    try {
        res.send('show orders\n   ' + (0, order_entity_1.getAllOrders)());
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Show [token required]
app.get('/order/:id', function (req, res) {
    try {
        var id = 0;
        id = Number(req.query.id);
        var order = (0, order_entity_1.getOrderById)(id);
        res.send(order);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Create order
app.get('/add_order', function (req, res) {
    var productId = Number(req.query.productId);
    var userId = Number(req.query.userId);
    var productQuantity = Number(req.query.productQuantity);
    var status_of_order = String(req.query.status_of_order);
    var order = { productId: productId, userId: userId, productQuantity: productQuantity, status_of_order: status_of_order };
    (0, order_entity_1.createOrder)(order);
    res.send("new user added  " + order);
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
exports["default"] = app;
