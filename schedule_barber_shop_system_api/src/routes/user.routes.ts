import { Response } from "express";
import { Request } from "express";
import {Router} from "express";
import { userController } from "../modules/user";


export const userRoutes = Router()

userRoutes.post('/',(req:Request, res: Response)=> userController.handleCreateUser(req,res))
userRoutes.post('/auth',(req: Request,res: Response)=> userController.handleUserLogin(req,res))
userRoutes.post('/join', (req: Request, res: Response)=> userController.handleJoinRoom(req,res))




