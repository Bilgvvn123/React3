import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const UseEffect = ({ img }) => {
	const [a, setA] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/photos"
			);

			const datas = res.data.filter((el) => el.id < 101);
			console.log(datas);
			setA(datas);
		};

		fetchData();
	}, []);

	console.log("HELLO");
	return (
		<>
			{a.length !== 0
				? a.map((el) => <Card key={el.id} a={el} />)
				: "no data"}
		</>
	);
};

export default UseEffect;
