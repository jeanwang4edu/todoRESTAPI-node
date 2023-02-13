import express from 'express';
import bodyParser from 'body-parser';

import todoRoutes from './routes/todos.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(todoRoutes);

app.listen( port , () => {
    console.log(`server running at ${port}`);
})