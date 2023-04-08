import { Request, Response } from "express";
import { RoomService } from "./room.service";





export class RoomController {
    constructor(private roomService: RoomService){}
    public async handleCreateRoom(req: Request, res: Response){
        const response = await this.roomService.executeCreateRoom(req.body)
        return res.status(201).json(response)
    }
    public async handleListAllRooms(req: Request, res: Response){
        const response = await this.roomService.executeListAllRooms()
        return res.status(200).json(response)
    }
}