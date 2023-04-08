import { PrismaClient } from "@prisma/client";
import { UserController } from "./user.controller";
import { UserPrismaRepository } from "./user.prisma.repository";
import { UserService } from "./user.service";
import { RoomPrismaRepository } from "../room/room.prisma.repository";





export const prisma = new PrismaClient()
export const roomPrismaRepository = new RoomPrismaRepository(prisma)
export const userPrismaRepository = new UserPrismaRepository(prisma)
export const userService = new UserService(userPrismaRepository,roomPrismaRepository)
export const userController = new UserController(userService)