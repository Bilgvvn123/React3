import React, { useState } from "react";

const Spoj = () => {
	const [toonuud, setToonuud] = useState("");
	const [show, setShow] = useState(false);
	const fn = () => {
		const a = toonuud.split("");
		let s = 0;
		a.forEach((el) => {
			s += Number(el);
		});

		return s;
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Toonuud"
				onChange={(e) => setToonuud(e.target.value)}
			/>
			<br />
			<button onClick={() => setShow(!show)}>+</button>
			{show ? fn() : ""}
		</div>
	);
};

export default Spoj;
