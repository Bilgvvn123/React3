import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const UseEffect = () => {
	const [a, setA] = useState([]);
	const [b, setB] = useState("posts");

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/${b}`
			);

			const datas = res.data.filter((el) => el.id < 101);
			console.log(datas);
			setA(datas);
		};

		console.log("USEEFFECT!");

		fetchData();
	}, [b]);

	const filter = () => {};

	return (
		<div>
			<button
				style={{ margin: "100px" }}
				onClick={() => {
					setB("users");
					console.log("RE-RENDER");
				}}
			>
				USERS
			</button>
			<button
				style={{ margin: "100px" }}
				onClick={() => {
					setB("posts");
					console.log("RE-RENDER");
				}}
			>
				POSTS
			</button>
			<button
				style={{ margin: "100px" }}
				onClick={() => {
					setB("photos");
					console.log("RE-RENDER");
				}}
			>
				PHOTOS
			</button>
			{/* {a.length !== 0
				? a.map((el) => <Card key={el.id} a={el} />)
				: "no data"} */}
		</div>
	);
};

export default UseEffect;
