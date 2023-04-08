
import { NextFunction, Request, Response } from "express"



export class AppError extends Error{
    constructor(public message: string, public statusCode = 400){
        super()
    }
}

export const errorHandle = (err: any, req: Request, res: Response, next: NextFunction ) =>{
    if(err instanceof AppError){
        // console.log({
        //     statusComde: err.statusCode,
        //     message: err.message
        // })
        return res.status(err.statusCode).json({message: err.message})
    }
    else{
        console.log(err)
        return res.status(500).json({ message: "Internal server error." });
    }
}