import { pool } from '../dbconnection.js'
export default async function (fastify, opts) {
    fastify.get('/posts', async function (request, reply) {
        return reply.view("templates/formulario.ejs");
    });
    fastify.post('/posts', async function (request, reply) {
        const { titulo, descripcion, imagen, alternativo, cuerpo, autor } = request.body;
        const query = await pool.query('INSERT INTO posts (titulo, descripcion, imagen, alternativo, cuerpo, autor) VALUES ($1, $2, $3, $4, $5, $6);', [titulo, descripcion, imagen, alternativo, cuerpo, autor]);
        return reply.send({ message: 'Post creado' });
    });
}