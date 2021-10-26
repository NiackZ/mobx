import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import todo from './store/todo';

const Todo = observer(() => {

	useEffect(()=>todo.fetchTodos(),[])

	return (
		<div>
			{!todo.loading
			?<h3>Загрузка...</h3> 
			:''}
			{todo.todos.map(item=>
				<div className="todo" key={item.id} >
					<input type="checkbox" onChange={()=>todo.completeTodo(item)} checked={item.completed} />
					{item.title}
					<button style={{margin: '0 10px'}} onClick={()=>todo.removeTodo(item)}>Удалить</button>
				</div>
			)}
		</div>
	);
})

export default Todo;