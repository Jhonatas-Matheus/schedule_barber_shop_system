import { Prisma, Room, User } from "@prisma/client";
import { UserPrismaRepository } from "./user.prisma.repository";
import { AppError } from "../../errors/app.error";
import { HandleCrypt } from "../../utils/bcrypt";
import { RoomPrismaRepository } from "../room/room.prisma.repository";
import { io } from "../../app";
import { UserAuthDto, UserLoginDto } from "./user.dto";
import { HandleJwtAuth } from "../../utils/jwtauth";




export class UserService{
    constructor(private userPrismaRepository: UserPrismaRepository, private roomPrismaRepository: RoomPrismaRepository ){}

    async createUser(payload: Prisma.UserCreateInput):Promise<User>{
        const emailAlreadyExists = await this.userPrismaRepository.findUserByEmail(payload.email)
        const usernameAlreadyExists = await this.userPrismaRepository.findUserByUsername(payload.username)
        if(emailAlreadyExists && usernameAlreadyExists){
            throw new AppError('Email and Username already exists.', 409)
        }
        else if(emailAlreadyExists){
            throw new AppError('Email already exists.', 409)
        }
        else if(usernameAlreadyExists){
            throw new AppError('Username already exists.', 409)
        }
        HandleCrypt.hashPassword(payload.password)
        payload = {...payload,  password: await HandleCrypt.hashPassword(payload.password)}
        return this.userPrismaRepository.createUser(payload)
    }
    async executeJoinRoom(roomId: string, userId: string){
        const roomFound = await this.roomPrismaRepository.findRoomById(roomId)
        if(roomFound){
            const response = await this.userPrismaRepository.updateRoomOfUser(userId, roomFound)
            const rooms = await this.roomPrismaRepository.listAllRooms()
            io.emit('updateRooms', rooms)
           return response
        }
    }
    async executeUserLogin(payload: UserLoginDto): Promise<UserAuthDto>{
        const userFound = await this.userPrismaRepository.findUserByEmail(payload.email)
        if(userFound){
           const passwordMatch:boolean = await HandleCrypt.comparePassord(payload.password, userFound.password)
           if(!passwordMatch){
            throw new AppError('Invalid email or password.', 400)
           }
           const authUserResponse = await HandleJwtAuth.generateJwt(userFound)
           return {token: authUserResponse}
        }
        throw new AppError('Invalid email or password.', 400)
    }
}