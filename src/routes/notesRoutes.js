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

const notesRouter = Router();
notesRouter.use('/notes', authenticate);
notesRouter.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
notesRouter.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
notesRouter.post('/notes',celebrate(createNoteSchema, { abortEarly: false }), createNote);
notesRouter.patch('/notes/:noteId',celebrate(updateNoteSchema, { abortEarly: false }), updateNote);
notesRouter.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
export default notesRouter;
