import React, { useState } from "react";

const Daalgawar = () => {
	const [urgun, setUrgun] = useState("");
	const [undur, setUndur] = useState("");

	const [value, setValue] = useState("");
	const [spoj1, setSpoj1] = useState("Hariu :");

	const [value2, setValue2] = useState("");
	const [spoj2, setSpoj2] = useState("Hariu :");

	const [value3, setValue3] = useState("");
	const [spoj3, setSpoj3] = useState("Hariu :");

	const bodolt = () => {
		let s = 0;
		for (let i = 0; i <= Number(value); i++) {
			s += i;
		}

		setSpoj1(s);
	};

	const bodolt2 = () => {
		let s = 0;
		for (let i = 1; i <= Number(value2); i++) {
			s += i * i;
		}

		setSpoj2(s);
	};

	const bodolt3 = () => {
		if (Number(value3) % 2 == 1) {
			let s = 0;
			for (let i = 1; i <= Number(value3); i = i + 2) s += i;

			setSpoj3(s);
		}
	};

	return (
		<div>
			{/* Spoj */}
			<input type="text" onChange={(e) => setValue(e.target.value)} />
			<button onClick={bodolt}>Bodoh</button>
			<h2>{spoj1}</h2>

			{/* spoj2 */}
			<input type="text" onChange={(e) => setValue2(e.target.value)} />
			<button onClick={bodolt2}>Bodoh</button>
			<h2>{spoj2}</h2>

			{/* spoj3 */}
			<input type="text" onChange={(e) => setValue3(e.target.value)} />
			<button onClick={bodolt3}>Bodoh</button>
			<h2>{spoj3}</h2>

			<input type="text" onChange={(e) => setUrgun(e.target.value)} />
			<input type="text" onChange={(e) => setUndur(e.target.value)} />
			<br />
			<input type="range" style={{ width: "100px" }} name="" id="" />
			<div
				style={{
					marginLeft: "100px",
					display: "inline-block",
					border: "1px solid #000",
					width: urgun + "px",
					height: undur + "px",
				}}
				className="shadow"
			></div>
		</div>
	);
};

export default Daalgawar;
