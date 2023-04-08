import express, { Request, Response } from 'express'
import http from 'http'
import {Server} from 'socket.io'
import "express-async-errors";
import cors from 'cors'
import { userRoutes } from './routes/user.routes'
import { errorHandle } from './errors/app.error'
import { PrismaClient } from "@prisma/client";
import { roomRoutes } from './routes/room.routes';

export const prisma = new PrismaClient()
export const app = express()
app.use(express.json())
app.use(cors())
export const server = http.createServer(app)

const users: string[] = []

export const io = new Server(server,{
    cors: {
        origin: '*',
        
    }
})
io.on("connection", (socket) => {
    users.push(socket.id)
    console.log(socket.id)
    io.emit('entrou', users)
});
app.use('/user',userRoutes)
app.use('/room',roomRoutes)
app.use(errorHandle)