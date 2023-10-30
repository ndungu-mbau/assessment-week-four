import { Request, Response } from 'express'
import { handlers } from '../db'
import { NoteDto } from '../types'

export const controllers = {
  async findAll(_: Request, res: Response){
    const notes = await handlers.findAll()
    res.status(200).json(notes)
  },
  async findOne(req: Request, res: Response){
    const note = await handlers.findOne(req.params.id)
    res.status(200).json(note)
  },
  async insertOne(req: Request, res: Response){
    const newNote: NoteDto = req.body
    const note = await handlers.insertOne(newNote)

    res.status(200).json(note)
  },
  async updateOne(req: Request, res: Response){},
  async deleteOne(req: Request, res: Response){}
}