import { User } from '@prisma/client'
import {sign} from 'jsonwebtoken'


export class HandleJwtAuth{
    static async generateJwt(userInfo: User): Promise<string> {
        console.log(process.env.JWT_SECRET_KEY)
        const token = sign({
            username: userInfo.username,
            userId: userInfo.id
        },process.env.JWT_SECRET_KEY as string,{subject: userInfo.id})
        return token
    }
}