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
  getNoteSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();
notesRouter.get('/notes', celebrate(getNoteSchema), getAllNotes);
notesRouter.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
notesRouter.post('/notes',celebrate(createNoteSchema, { abortEarly: false }), createNote);
notesRouter.patch('/notes/:noteId',celebrate(updateNoteSchema, { abortEarly: false }), updateNote);
notesRouter.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
export default notesRouter;
