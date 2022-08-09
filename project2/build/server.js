"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//API Endpoints **Example**: A SHOW route: 'blogs/:id' [GET] 
//products
app.get('/Products', function (req, res) {
    /**
     *  Index
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

     */
    res.send('show products');
});
//Index
app.get('/Products/id', function (req, res) {
    const product = req.query.getProductById;
    res.send(product);
});
//user
//Index [token required]
app.get('/user', (req, res) => {
    try {
        res.send('this is the INDEX route');
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
//Show [token required]
app.get('/user/:id', (req, res) => {
    try {
        res.send('this is the SHOW route');
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
app.get('/user', function (req, res) {
    /**
     *
-
- Create N[token required]
     */
    res.send("show users");
});
//order
app.get('/order', function (req, res) {
    /**
     * Current Order by user (args: user id)[token required]
    - [OPTIONAL] Completed Orders by user (args: user id)[token required]
    
     */
    res.send("show orders");
});
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});