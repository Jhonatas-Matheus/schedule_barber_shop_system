import express, { Request, Response } from 'express'
import http from 'http'
import {Server} from 'socket.io'

import cors from 'cors'

export const app = express()
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

app.use('/',(req:Request,res:Response)=>{
    return res.status(200).json({users: users})
})