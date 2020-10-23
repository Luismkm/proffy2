import { Request, Response } from 'express';
const bcrypt = require('bcrypt');

import db from '../database/connection'

export default class UsersControllers {

    async create( req: Request, res: Response){
        const {
            name,
            lastname,
            email,
        } = req.body

        let { password } = req.body

        try {
            const salt = await bcrypt.genSalt(10)
            password = await bcrypt.hash(password, salt)
        } catch (error) {
            return res.status(400).json({
                error: 'Unexpected error while bcrypt'
            })    
        }

        const trx = await db.transaction()

        try {
            await trx('users').insert({
                name,
                lastname,
                email,
                password
            })

            await trx.commit()
            return res.status(201).send()

        } catch (err) {
            await trx.rollback()
            return res.status(400).json({
                error: 'Unexpected error while creating new user'
            })    
        }

        // return res.status(200).json({ message: 'Success' })
    }
}