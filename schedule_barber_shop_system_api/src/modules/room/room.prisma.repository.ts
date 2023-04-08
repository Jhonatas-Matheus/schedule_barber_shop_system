import { Prisma, PrismaClient, Room } from "@prisma/client";




export class RoomPrismaRepository {
  constructor(private prisma: PrismaClient) {}
  public async createRoom(date: Prisma.RoomCreateInput): Promise<Room> {
    return this.prisma.room.create({ data: date });
  }
  public async findRoomsByDate(date: Date | string): Promise<Room[] | null> {
    return this.prisma.room.findMany({ where: { date: date } });
  }
  public async findRoomById(id: string): Promise<Room | null> {
    const response = await this.prisma.room.findUnique({ where: { id: id } });
    return response
  }
  public async listAllRooms(){
    const response = await this.prisma.room.findMany({include: {users:true}})
    return response
  }
}