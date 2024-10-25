const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const cors=require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    
    if (!parsePayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong input"
        });
    }

    // Save the todo to MongoDB
    await todo.create({
        title: createPayload.title,
        description: req.body.description,
        completed:false,
    });
    
    res.status(201).json({ msg: "Todo created successfully" });
});

app.get("/todos", async (req, res) => {
    // Retrieve todos from MongoDB
    const todoDetails = await todo.find();
    res.json({ todoDetails });
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong input"
        });
    }

    // Update the todo in MongoDB
    const updatedTodo = await todo.findByIdAndUpdate(
       {
       _id:req.body.id,
       },
        { completed: true },
    );

    if (!updatedTodo) {
        return res.status(404).json({ msg: "Todo not found" });
    }

    res.json({ msg: "Todo updated successfully", todo: updatedTodo });
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
