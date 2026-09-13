import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';
import {
  createNoteSchema,
  noteIdSchema,
  updateNoteSchema,
  getAllNotesSchema,
} from '../validations/notesValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const notesRoute = Router();
notesRoute.use('/notes', authenticate);
notesRoute.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
notesRoute.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
notesRoute.post('/notes',celebrate(createNoteSchema, { abortEarly: false }), createNote);
notesRoute.patch('/notes/:noteId',celebrate(updateNoteSchema, { abortEarly: false }), updateNote);
notesRoute.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
export default notesRoute;
