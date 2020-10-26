import { Request, Response } from "express";
const bcrypt = require('bcrypt');

import db from '../database/connection'
import { sign } from '../utils/jwt'

interface User {
  id: number,
  name: string,
  lastname: string,
  email: string,
  password: string
}

export default class AuthControllers {

  async create(req: Request, res: Response){		
    if(req.headers.authorization){
      const [, hash] = req.headers.authorization.split(" ")
      const [reqEmail, reqPassword] = Buffer.from(hash, 'base64').toString().split(":")
     
      let dataUser = await db('users').where('email', reqEmail.toLowerCase())
      
      if(!dataUser[0]){
           return res.status(401).json({ message: 'Email or password invalid' })
			}
			
      // return res.json({message: 'ok'})
      const user: User = dataUser[0]
      bcrypt.compare(reqPassword, user.password, function(err: string, result: boolean) {
         
        if(!result) return res.status(401).json({ message: 'Email or password invalid' })
        
        user.password = ''
        const token = sign({user_id: user.id})
        return res.status(200).json({ user, token })
      });
    }
	}
}
