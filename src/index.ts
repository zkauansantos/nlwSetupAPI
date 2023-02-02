import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

export const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
	port: 3001,
}).then(() => {
	console.log('🔥 Server started at http://localhost:3001');
});