import axios from 'axios';
import { url, setHeaders } from '../../api';
import { toast } from 'react-toastify';

// get todos
export const getTodos = () => {
	return (dispatch) => {
		axios
			.get(`${url}/todos`, setHeaders())
			.then((todos) => {
				dispatch({
					type: 'GET_TODOS',
					todos
				});
			})
			.catch((error) => {
				console.log(error.response);

				
			});


	};
};

// addtodos
export const addTodo = (newTodo) => {
	return (dispatch, getState) => {
		const author = getState().auth.name
		const uid = getState().auth._id

		axios
			.post(`${url}/todos`, {...newTodo, author, uid}, setHeaders())
			.then((todo) => {
				dispatch({
					type: 'ADD_TODO',
					todo
				});
			})
			.catch((error) => {
				console.log(error.response);

				toast.error(error.response?.data, {
					position: toast.POSITION.BOTTOM_RIGHT,
				  });
			});
	};
};

// update todos
export const updateTodo = (updatedTodo, id) => {
	return (dispatch) => {
		axios
			.put(`${url}/todos/${id}`, updatedTodo, setHeaders())
			.then((todo) => {
				dispatch({
					type: 'UPDATE_TODO',
					todo
				});
			})
			.catch((error) => {
				console.log(error.response);

				toast.error(error.response?.data, {
					position: toast.POSITION.BOTTOM_RIGHT,
				  });
			});
	};
};

// checktodos
export const checkTodo = (id) => {
	return (dispatch) => {
		axios
			.patch(`${url}/todos/${id}`, {}, setHeaders())
			.then((todo) => {
				dispatch({
					type: 'CHECK_TODO',
					todo
				});
			})
			.catch((error) => {
				console.log(error.response);

				toast.error(error.response?.data, {
					position: toast.POSITION.BOTTOM_RIGHT,
				  });
			});
	};
};

// delete todos
export const deleteTodo = (id) => {
	return (dispatch) => {
		axios
			.delete(`${url}/todos/${id}`, setHeaders())
			.then((todo) => {
				dispatch({
					type: 'DELETE_TODO',
					id
				});
			})
			.catch((error) => {
				console.log(error.response);

				toast.error(error.response?.data, {
					position: toast.POSITION.BOTTOM_RIGHT,
				  });
			});
	};
};