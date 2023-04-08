import { Request, Response } from "express";
import { UserService } from "./user.service";
import { UserLoginDto } from "./user.dto";




export class UserController {
    constructor(private userService: UserService){}
    async handleCreateUser(req: Request, res: Response){
        const response = await this.userService.createUser(req.body)
       const  {password, ...rest} = response
        return res.status(201).json(rest)
    }
    async handleJoinRoom(req: Request, res: Response){
        const {userId, roomId} = req.body
        const response = await this.userService.executeJoinRoom(roomId, userId)
        return res.status(200).json(response)
    }
    async handleUserLogin(req: Request, res: Response){
        const {email, password}:UserLoginDto = req.body
        const response = await this.userService.executeUserLogin({email,password})
        return res.status(200).json(response)
    }
}