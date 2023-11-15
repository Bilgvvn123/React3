import React, { useState } from "react";
import Sergeelt from "./Sergeelt";
import Onchange from "./Onchange";
import Spoj from "./Spoj";
import Wikipedia from "./Wikipedia";
import Todo from "./Todo";
import Spoj2 from "./Spoj2";

const App = () => {
	// const [utga, setUtga] = useState("");

	const niitAsuultHariult = [
		{
			asuult: "A",
		},
		{
			asuult: "B",
		},
	];

	console.log("App is rendered!");

	return (
		<>
			{/* {niitAsuultHariult.map((el) => (
				<Sergeelt asuult={el.asuult} hariult={el.hariult} />
			))}

			<Sergeelt /> */}

			{/* <Onchange /> */}

			{/* <Spoj /> */}

			{/* <Wikipedia /> */}

			{/* <Todo /> */}

			{niitAsuultHariult.map((el) => (
				<Spoj2 asuult={el.asuult} />
			))}
		</>
	);
};

export default App;
