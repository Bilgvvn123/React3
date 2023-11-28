import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
	const [users, setUsers] = useState([]);

	// const {}

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			// console.log(res.data);
			setUsers(res.data);
		};

		fetchUsers();
	}, []);

	return (
		<div>
			{users.length !== 0
				? users.map((el) => (
						<div
							style={{
								boxShadow:
									"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
								padding: "10px",
								margin: "20px",
							}}
						>
							<h1>{el.name}</h1>
							<Link to={`/users/1`}>{el.email}</Link>
							<p>{el.phone}</p>
						</div>
				  ))
				: "no users"}
		</div>
	);
};

export default Users;
