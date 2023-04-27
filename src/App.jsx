import { useState } from 'react';
import './App.css';

function App() {
	const [currentInput, setCurrentInput] = useState('');
	function InputUpdate(e) {
		setCurrentInput(e.target.value);
	}
	return (
		<>
			<form className='new-item-form'>
				<div className='form-row'>
					<label htmlFor='item'>New item</label>
					<input
						value={currentInput}
						onChange={InputUpdate}
						type='text'
						id='item'
					/>
				</div>
				<button className='btn'>Add</button>
			</form>
			<h1 className='header'>ToDos</h1>
			<ul className='list'>
				<li>
					<label>
						<input type='checkbox' />
						Item
					</label>
					<button className='btn btn-danger'>Delete</button>
				</li>
			</ul>
		</>
	);
}

export default App;
