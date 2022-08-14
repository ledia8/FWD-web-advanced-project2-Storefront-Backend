import { Request, Response } from "express";
import { User } from '../models/user.model';
import {getUserById, getAllUsers, createUser} from '../entities/user.entity';
import {JsonWebTokenError, Jwt} from'jsonwebtoken';

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
export const create = async(req:Request, res:Response) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let password = req.body.password;
    //let u: User= {fname,lname,password};
    // u.firstName = fname;
    // u.lastName = lname;
    // u.password = password;    
    //createUser(u);
	res.send("new user added  " );
}
//Index [token required]
export const index = async(req:Request, res:Response) => {
    try {
        res.send('show users\n   ' + getAllUsers());
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
//Show [token required]
export const show = async(req:Request, res:Response) => {
    try {
        let id: number = 0;
        id = Number(req.query.id);
        const user=  getUserById(id);
        res.send(user);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}



