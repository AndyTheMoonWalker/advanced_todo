import { useState } from 'react';
import './App.css';

function App() {
	const [currentInput, setCurrentInput] = useState('');
	const [todos, setTodos] = useState([]);

	function inputUpdate(e) {
		setCurrentInput(e.target.value);
	}
	function submitHandler(e) {
		e.preventDefault();
		setTodos((prev) => {
			return [
				...prev,
				{ id: crypto.randomUUID(), title: currentInput, completed: false },
			];
		});
		setCurrentInput('');
	}

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

	function deleteTodo(id) {
		setTodos((prev) => {
			return prev.filter((todo) => todo.id !== id);
		});
	}
	return (
		<>
			<form onSubmit={submitHandler} className='new-item-form'>
				<div className='form-row'>
					<label htmlFor='item'>New item</label>
					<input
						value={currentInput}
						onChange={inputUpdate}
						type='text'
						id='item'
					/>
				</div>
				<button className='btn'>Add</button>
			</form>
			<h1 className='header'>ToDos</h1>
			{todos.length === 0 && 'There is nohting'}
			<ul className='list'>
				{todos.map((todo) => {
					return (
						<li
							key={todo.id}
							onChange={(e) => toggleTodo(todo.id, e.target.completed)}
						>
							<label>
								<input type='checkbox' checked={todo.completed} />
								{todo.title}
							</label>
							<button
								className='btn btn-danger'
								onClick={() => deleteTodo(todo.id)}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default App;
