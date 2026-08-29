import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, trim: true, required: false, default: '' },
    tag: {
      type: String,
      enum: TAGS,
      default: TAGS[TAGS.length-1],
    },
  },
  { timestamps: true, versionKey: false },
);

noteSchema.index({tag:1});

const Note = model('Note', noteSchema);
export default Note;

