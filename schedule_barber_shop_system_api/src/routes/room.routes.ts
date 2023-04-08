import { Response } from "express";
import { Request } from "express";
import {Router} from "express";
import { roomController } from "../modules/room";

export const roomRoutes = Router()

roomRoutes.post('/',(req: Request, res:Response)=> roomController.handleCreateRoom(req,res))
roomRoutes.get('/',(req: Request, res:Response)=> roomController.handleListAllRooms(req,res))