import { v4 as uuid } from 'uuid'
import { Note, NoteDto } from '../types'

const notes: Note[] = []

export const handlers = {
  findAll(){
    return notes
  },
  findOne(id: string | number){
    return notes.find(note => note.id === id)
  },
  insertOne(note: NoteDto){
    console.log(note)
    const newNote: Note = {
      ...note,
      id: uuid(),
      createdAt: new Date().toDateString()
    }

    notes.push(newNote)
    return newNote
  },
  updateOne(){},
  deleteOne(){}
}