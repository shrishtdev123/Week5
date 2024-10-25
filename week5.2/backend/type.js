const { z } = require("zod");

const createTodo = z.object({
    title: z.string(),
    description: z.string().optional(),
});

const updateTodo = z.object({
    id: z.string(),
    completed: z.boolean(),
});

module.exports = { createTodo, updateTodo };
