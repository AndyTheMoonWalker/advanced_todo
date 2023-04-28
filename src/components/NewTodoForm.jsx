import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
	const [currentInput, setCurrentInput] = useState('');

	function inputUpdate(e) {
		setCurrentInput(e.target.value);
	}

	function submitHandler(e) {
		e.preventDefault();
		if (currentInput === '') return;
		onSubmit(currentInput);
	}

	return (
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
	);
}
