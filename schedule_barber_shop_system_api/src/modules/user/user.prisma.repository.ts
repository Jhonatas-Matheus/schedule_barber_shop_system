import { Prisma, PrismaClient, Room, User } from "@prisma/client";





export class UserPrismaRepository {
    constructor(private prisma: PrismaClient ){}

    async createUser(user: Prisma.UserCreateInput): Promise<User>{
        const response = await this.prisma.user.create({data: user})
      return response
    }
    async updateUser(id: string, user: Prisma.UserUpdateInput ): Promise<User>{
        return this.prisma.user.update({where: {id}, data: user})
    }
    async findUserBydId(id: string): Promise<User| null>{
        return this.prisma.user.findUnique({ where: {id: id} })
    }
    async deleteUser(id: string) : Promise<void>{
        this.prisma.user.delete({ where: { id: id } })
    }
    async findUserByEmail(email:string): Promise<User | null>{
        return this.prisma.user.findUnique({ where: { email: email } });
    }
    async findUserByUsername(username:string): Promise<User | null>{
        return this.prisma.user.findUnique({ where: { username: username } });
    }
    async updateRoomOfUser(id: string, room: Room){
        const response = await this.prisma.user.update({where: {id: id}, data:{roomId: room.id}})
        return response
    }
}