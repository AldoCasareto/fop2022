import express from 'express';
import { Note } from './models/note.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2022-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2022-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2022-05-30T19:20:14.298Z',
    important: true,
  },
];

app.get('/', (req, res) => {
  res.send('notes');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(404).end();
  }
});

app.post('/api/notes', async (req, res) => {
  const { content, important } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'no content' });
  }

  const note = new Note({
    content,
    date: new Date(),
    important: important || false,
  });

  const newNote = await note.save();
  res.json(newNote);
  res.status(201).end();
});

app.delete('/api/notes/:id', (req, res) => {
  try {
    const id = +req.params.id;
    console.log(`id   = `, id);
    notes = notes.filter((note) => notes.id === id);

    res.status(204).end();
  } catch (error) {
    res.status(404).end();
  }
});

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
