import { Segments,Joi } from "celebrate";
import { TAGS } from "../constants/tags.js";
import {isValidObjectId} from 'mongoose';

const isIdValid = (value, helpers) =>{
 return isValidObjectId(value) ?value : helpers.message('Invalid id format');
};
export const noteIdSchema = {[Segments.PARAMS]: Joi.object({
  noteId: Joi.string().custom(isIdValid).required()})};



export const createNoteSchema = {[Segments.BODY]:Joi.object({
  title: Joi.string().min(1).trim().required().messages({
    'string.base': 'Title must be a string',
    'string.min':'Title should have at least {#limit} characters',
    'any.required':'Title is required'
  }),
  content: Joi.string().allow(""),
  tag: Joi.string().valid(...TAGS).default(TAGS[TAGS.length-1]).messages({'any.only':`Tag must be one of: ${(TAGS.join(', '))}`})
})};

export const updateNoteSchema = {
  ...noteIdSchema,
  [Segments.BODY]:Joi.object({
  title: Joi.string().min(1).trim().messages({
    'string.base': 'Title must be a string',
    'string.min':'Title should have at least {#limit} characters',
  }),
  content: Joi.string().allow(""),
  tag: Joi.string().valid(...TAGS).default(TAGS[TAGS.length-1]).messages({'any.only':`Tag must be one of: ${(TAGS.join(', '))}`})
}).min(1)
};

export const getNoteSchema = {
  [Segments.QUERY]: Joi.object({
page: Joi.number().min(1).integer().default(1),
perPage: Joi.number().integer().min(15).default(10),
tag:Joi.string().valid(...TAGS),
search:Joi.string()
  })
};



