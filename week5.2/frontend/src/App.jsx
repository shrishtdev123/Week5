import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        try 
        {
            const response = await fetch("http://localhost:3000/todos");
            const data = await response.json();
            setTodos(data.todoDetails);
        } 
        catch (error) 
        {
            console.log(error.message);
            
        }
    };
    fetchTodos();
    return (
        <div>
            <CreateTodo />
             <Todos todos={todos} />
        </div>
    );
}

export default App;
