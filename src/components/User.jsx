import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
	const [user, setUser] = useState({
		username: "no name",
		address: {
			street: "0 0 0 0",
		},
	});
	const [posts, setPosts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${id}`
			);

			const res2 = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?userId=${id}`
			);

			setUser(res.data);
			setPosts(res2.data);
			console.log(res.data);
		};

		fetchUsers();
	}, []);

	return (
		<>
			<div>
				User + {id}
				{<h1>{user.name}</h1>}
				{<p>{user.address.street}</p>}
				<br />
				<hr />
			</div>

			<div>
				{posts.length !== 0
					? posts.map((el) => (
							<div
								style={{
									boxShadow:
										"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
									margin: "20px",
									padding: "30px",
								}}
							>
								<h6>{user.name}</h6>
								<h1>{el.id}</h1>
								<h1>{el.title}</h1>
								<p>{el.body}</p>
								<br />
							</div>
					  ))
					: ""}
			</div>
		</>
	);
};

export default User;
