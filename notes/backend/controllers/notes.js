import { Note } from '../models/note.js';
import express from 'express';

export const notesRouter = express.Router();

notesRouter.get('/', async (req, res) => {
  const notes = await Note.find({});

  res.status(200).json(notes);
});

notesRouter.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const note = await Note.findById(id);
    note ? res.json(note) : res.status(404).end();
  } catch (error) {
    next(error);
  }
});

notesRouter.post('/', async (req, res, next) => {
  const { content, important } = req.body;

  const note = {
    content,
    important: important || false,
    date: new Date(),
  };

  try {
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    next(error);
  }
});

notesRouter.delete('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const deleteNote = await Note.findByIdAndRemove(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

notesRouter.put('/"id', async (req, res, next) => {
  const { content, important } = req.body;
  const id = req.params.id;

  const note = {
    content,
    important,
  };

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, note, { new: true });
    res.json(updatedNote);
  } catch (error) {
    next(error);
  }
});
