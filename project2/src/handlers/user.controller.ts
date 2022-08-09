// import { Request, Response } from "express";
// import { User } from "../models/user.model";
// import { getUserById } from "../entities/user.entity"
// // import { sanitizedUserResponse } from "../utils/helpers";

// /** @handler handle get user request */
// export const sanitizedUserResponse = (user: User): User => {
//     delete user.password;
//     return user;
// }

// export const getUser = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { id } = req.params as unknown as { id: number };
//         let user = await getUserById(id);
//         user = sanitizedUserResponse(user);
//         res.send(user);
//     } catch (error: unknown) {
//         const { message } = error as { message: string }
//         res.status(400).send({
//             "message": message
//         });
//     }
// }