import { TodoItem } from './TodoItem';

export function TodoList({ todos, deleteTodo, toggleTodo }) {
	return (
		<ul className='list'>
			{todos.map((todo) => {
				return (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</ul>
	);
}
