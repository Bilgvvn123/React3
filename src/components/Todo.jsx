import React, { useState } from "react";
import Card from "./Card";

const Todo = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		setTodos([...todos, todo]);
		console.log(todos);
	};

	console.log("Todo is rendered!");

	return (
		<div style={{ fontSize: "50px" }}>
			<input
				type="text"
				placeholder="hello"
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button onClick={addTodo}>add</button>
			<Card />
			<div>
				{todos.length !== 0
					? todos.map((el) => <h2>{el}</h2>)
					: "No Todos"}
			</div>
		</div>
	);
};

export default Todo;
