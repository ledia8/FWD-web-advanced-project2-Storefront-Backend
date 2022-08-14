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
exports.show = exports.index = exports.create = void 0;
const user_entity_1 = require("../entities/user.entity");
// export const create_TOken = async (req: Request, res: Response) => {
//     try {
//         const authorizationHeader = String(req.headers.authorization);
//         const token = authorizationHeader.split(' ')[1];
//         JWT.verify(token, process.env.TOKEN_SECRET);
//     } catch(err) {
//         res.status(401)
//         res.json('Access denied, invalid token')
//         return
//     }    
// }
//----------------------------------------------------
//user
//Create user
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let password = req.body.password;
    //let u: User= {fname,lname,password};
    // u.firstName = fname;
    // u.lastName = lname;
    // u.password = password;    
    //createUser(u);
    res.send("new user added  ");
});
exports.create = create;
//Index [token required]
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('show users\n   ' + (0, user_entity_1.getAllUsers)());
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
        const user = (0, user_entity_1.getUserById)(id);
        res.send(user);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.show = show;
