export const Todos = ({ todos }) => {
    return (
        <div>
            {todos.map(function(todo) {
                return (
                    <div key={todo.id}> {/* Assuming each todo has a unique 'id' */}
                        <h1>{todo.title}</h1> {/* Fixed the opening tag */}
                        <h2>{todo.description}</h2>
                        <button>
                            {todo.completed ? "Completed" : "Mark as completed"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
