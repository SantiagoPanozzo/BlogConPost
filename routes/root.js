import { pool } from '../dbconnection.js'

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        const query = await pool.query('SELECT * FROM posts;');
        const articulos = await query.rows;
        //return reply.send(articulos);
        return reply.view("templates/blog.ejs", { articulos });
    });
}
