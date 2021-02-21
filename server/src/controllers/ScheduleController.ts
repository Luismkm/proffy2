import { Request, Response } from 'express'

import db from '../database/connection'
import { convertMinutesToHours } from '../utils/convertHours'

export default class ScheduleClass {

  async show( req: Request, res: Response ) {

    const { id } = req.params

    const schedule = await db('class_schedule')
    .join('week', 'class_schedule.week_day', '=', 'week.id')
    .select('class_schedule.*', 'week.day').where('class_id', id)

    //console.log(schedule)

    //convertMinutesToHours(540)

        schedule.map(item =>(
        item.from = convertMinutesToHours(item.from),
        item.to = convertMinutesToHours(item.to)
      ))
      
      console.log(schedule)
    
       
    return res.status(201).json(schedule)
  }

  async delete( req: Request, res: Response ) {

    const id = req.query.id

      try {

        await db('class_schedule')
        .where('id', Number(id) )
        .delete()
    
        return res.status(201).json({ 'message': 'success' })
    
       } catch (error) {
         console.log(error)
       }

    
  }
}

