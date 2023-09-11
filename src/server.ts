import express from 'express';
import schoolRoute from './routes/schoolRoute';
import { corsMiddleware } from './middlewares/corsMiddleware';
import courseRoute from './routes/courseRoute';
import { logMiddleware } from './middlewares/logMiddleware';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(corsMiddleware) // -> middleware de proteção de acesso
app.use(logMiddleware) // -> middleware de log de rotas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use(schoolRoute);
app.use(courseRoute);

app.listen(port, () => {
  console.log(`O servidor iniciou na porta ${port}.`);
});
