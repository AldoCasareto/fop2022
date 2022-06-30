import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app.js';
import { Blog } from '../models/blog.js';

const api = supertest(app);

const endpoint = `/api/blogs`;

test('blogs are returned as json', async () => {
  await api
    .get(endpoint)
    .expect(200)
    .expect('Content-Type', /application\/json/);
}, 100000);

afterAll(() => {
  mongoose.connection.close();
});

test('there are two blogs', async () => {
  const res = await api.get(endpoint);
  expect(res.body).toHaveLength(2);
});

test('blog contains a specific blog title', async () => {
  const res = await api.get(endpoint);

  const titles = res.body.map(({ title }) => title);
  expect(titles).toContain('hello');
});

test('a blog can be added', async () => {
  const newNote = {
    url: 'www.peru21.com',
    title: 'Peru21',
    author: 'Cateriano',
    userId: '619b71819b47064bfd8e3033',
  };

  await api
    .post(endpoint)
    .send(newNote)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const res = await api.get(endpoint);

  const savedBlog = res.body.map(({ title }) => title);
  expect(savedBlog).toContain('Peru21');
});
