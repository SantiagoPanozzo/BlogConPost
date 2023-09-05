export default async function (fastify, opts) {
    fastify.get('/aboutme', async function (request, reply) {
        return reply.view("view/aboutme.html");
    });
}