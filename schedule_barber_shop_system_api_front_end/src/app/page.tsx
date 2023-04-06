'use client'
import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'
const socket = io('http://localhost:3001/')
socket.on('connect', ()=> console.log(socket.id))
export default function Page() {
    const [users, setUsers] =  useState<string[]>([])
    useEffect(() => {
        const handleUsers = (newUser: string[])=> setUsers(newUser) 
        socket.on('entrou', handleUsers)
        return () => {
            socket.off('entrou',handleUsers)
        }
        }, [])
    return (
        <div className="w-screen h-screen bg-blue-700/40">
            <h1 className="text-red-700">Teste</h1>

            <ul>
                {users.map(user=> <li key={user}>{user}</li>)}
            </ul>
        </div>
    )
  }
