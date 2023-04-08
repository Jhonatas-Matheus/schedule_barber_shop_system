import { Prisma } from "@prisma/client";
import { RoomPrismaRepository } from "./room.prisma.repository";




export class RoomService{
    constructor(private roomPrismaRepository: RoomPrismaRepository){}
    public async executeCreateRoom(date: Prisma.RoomCreateInput){
        date = {...date, date: new Date(date.date)}
        const roomAlreadyCreated = await this.roomPrismaRepository.findRoomsByDate(date.date)
        console.log(roomAlreadyCreated)
        return this.roomPrismaRepository.createRoom(date)
    }
    public async executeListAllRooms(){
        const response = await this.roomPrismaRepository.listAllRooms()
        return response 
    }
}