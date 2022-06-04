import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import material for styling
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
// import todos
import Todo from './Todo';
import { getTodos } from '../../store/actions/todoActions';

// set the styles for the app
const useStyles = makeStyles({
	todosStyle: {
		margin: '20px auto',
		padding: '20px',
		borderRadius: '9px',
		boxShadow: '0px 0px 12px -3px #000000'
	}
});
// function Listodos connected to mongodb
export default function ListTodos({ todo, setTodo }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	useEffect(
		() => {
			dispatch(getTodos());
		},
		[ todo._id, dispatch ]
	);
// return the map of the todos if there are any data in mongodb database
	return (
		<div className={classes.todosStyle}>
			<div>
				<Typography variant="h5">{todos.length > 0 ? 'the Todos' : 'No Todos'}</Typography>
				{todos &&
					todos.map((todo) => {
						return <Todo todo={todo} key={todo._id} setTodo={setTodo} todos={todos} />;
					})}
			</div>
		</div>
	);
}
