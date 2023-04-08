import { PrismaClient } from "@prisma/client";
import { RoomPrismaRepository } from "./room.prisma.repository";
import { RoomService } from "./room.service";
import { RoomController } from "./room.controller";





export const prisma = new PrismaClient()
export const roomPrismaRepository = new RoomPrismaRepository(prisma)
export const roomService = new RoomService(roomPrismaRepository)
export const roomController = new RoomController(roomService)