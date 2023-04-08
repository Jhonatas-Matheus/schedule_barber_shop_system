import {compare, hash} from 'bcryptjs'

export class HandleCrypt {
    static async  hashPassword(password: string): Promise<string>{
        const hashedPassword = await  hash(password, 9)
        return hashedPassword
    }
    static async comparePassord(password: string, hasedPassword: string): Promise<boolean>{
        const validationOfPassword = await compare(password,hasedPassword)
        return validationOfPassword
    }
}