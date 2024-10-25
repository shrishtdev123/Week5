import { useState } from "react";

export const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            alert("Todo added");
            console.log(json);
        } catch (error) {
            console.error("Error adding todo:", error);
            alert("Failed to add todo.");
        }
    };

    return (
        <div>
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Add a Todo</button>
        </div>
    );
};
