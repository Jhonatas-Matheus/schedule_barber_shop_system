import { RoomCreateDto } from "../room/room.dto"

export interface UserCreateDto{
    id?: string
    username: string
    email: string
    password: string
    room: RoomCreateDto
}
export interface UserReturnDto{
    id: string
    username: string
    email: string
}
export interface UserUpdateDto{
    id?: string
    username?: string
    email?: string
    password?: string
}
export interface UserLoginDto{
    email: string
    password: string
}
export interface UserAuthDto{
    token: string
}