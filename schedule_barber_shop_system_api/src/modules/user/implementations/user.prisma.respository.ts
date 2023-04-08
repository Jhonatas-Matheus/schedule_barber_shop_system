// import { Prisma, PrismaClient } from "@prisma/client";
// import { UserCreateDto, UserReturnDto, UserUpdateDto } from "../user.dto";
// import { IUserRepository } from "../user.repository";



// export class UserPismaRepository implements IUserRepository{
//     constructor(private prisma: PrismaClient){}
//     createUser(user: UserCreateDto,): Promise<UserReturnDto> {
//     }
//     updateUser(user: UserUpdateDto): Promise<UserReturnDto> {
//         throw new Error("Method not implemented.");
//     }
//     findUserById(id: string): Promise<UserReturnDto> {
//         throw new Error("Method not implemented.");
//     }
//     deleteUser(id: string): Promise<void> {
//         throw new Error("Method not implemented.");
//     }
// }