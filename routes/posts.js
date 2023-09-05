import { pool } from '../dbconnection.js'
export default async function (fastify, opts) {
    fastify.get('/blog', async function (request, reply) {
        const query = await pool.query('SELECT * FROM Posts;');
        const articulos = await query.rows;
        return reply.send(articulos);
        //return reply.view("templates/blog.ejs", { articulos });
    })
}