import { Router } from 'express';

const router = Router();

let todos = [];

router.get('/todos', (req, res, next) => {
    res.json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({
        message: 'todo added!',
        todos: todos
    })
});

router.put('/todos/:todoId', (req, res, next) => {
    const tId = req.params.todoId;
    const todoIndex = todos.findIndex( item => {
        return item.id === tId;
    });
    todos[todoIndex] = { id: tId, text: req.body.text};
    res.status(200).json({
        message: 'todo updated!',
        todos: todos
    })
});

router.delete('/todos/:todoId', (req, res, next) => {
    const tId = req.params.todoId;
    todos = todos.filter( item =>{
        return item.id !== tId
    });
    console.log(todos);
    res.status(200).json({
        message: 'todo deleted!',
        todos: todos
    })
});

export default router;