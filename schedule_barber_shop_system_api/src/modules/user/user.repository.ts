import { Prisma, User } from "@prisma/client";
import { UserCreateDto, UserReturnDto, UserUpdateDto } from "./user.dto";




export interface IUserRepository {
    createUser(user: UserCreateDto): Promise<UserReturnDto>
    updateUser(user: UserUpdateDto): Promise<UserReturnDto>
    findUserById(id: string): Promise<UserReturnDto>
    deleteUser(id: string): Promise<void>
}