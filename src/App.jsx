import { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';

function App() {
	const [todos, setTodos] = useState(() => {
		const localTodos = localStorage.getItem('ITEMS');
		if (localTodos === null) return [];
		return JSON.parse(localTodos);
	});

	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos));
	}, [todos]);

	function toggleTodo(id, completed) {
		setTodos((prev) => {
			return prev.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function addTodo(title) {
		setTodos((prev) => {
			return [...prev, { id: crypto.randomUUID(), title, completed: false }];
		});
	}

	function deleteTodo(id) {
		setTodos((prev) => {
			return prev.filter((todo) => todo.id !== id);
		});
	}
	return (
		<>
			<NewTodoForm onSubmit={addTodo} />
			<h1 className='header'>ToDos</h1>
			{todos.length === 0 && 'There is nohting'}
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	);
}

export default App;
