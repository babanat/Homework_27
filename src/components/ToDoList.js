import { useState } from "react";
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    const clearCompletedTodos = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    return (
        <div className="todo-list">
            <input 
                className="todo-input" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Введите задачу..."
            />
            <button className="todo-button" onClick={addTodo}>Add</button>
            <ul className="todo-items">
                {todos.map(todo => (
                    <li 
                        key={todo.id} 
                        className={`todo-item ${todo.completed ? 'completed' : ''}`} 
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <button className="clear-completed-button" onClick={clearCompletedTodos}>
                Clear Completed
            </button>
        </div>
    );
   
}

export default TodoList;
