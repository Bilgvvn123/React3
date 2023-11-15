import React, { useState } from "react";
import Sergeelt from "./Sergeelt";
import Onchange from "./Onchange";

const App = () => {
	const niitAsuultHariult = [
		{
			asuult: "A",
			hariult: "B",
		},
	];

	return (
		<>
			{/* {niitAsuultHariult.map((el) => (
				<Sergeelt asuult={el.asuult} hariult={el.hariult} />
			))}

			<Sergeelt /> */}

			<Onchange />
		</>
	);
};

export default App;
