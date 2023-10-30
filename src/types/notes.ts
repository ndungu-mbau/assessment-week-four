type Note = {
  id: string | number
  title: string
  content: string
  createdAt: string
}

type NoteDto = {
  title: string
  content: string
}

export {
  Note,
  NoteDto
}