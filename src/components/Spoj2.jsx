import React, { useState } from "react";

const Spoj2 = ({ asuult }) => {
	const [utga, setUtga] = useState("");
	const [hariu, setHariu] = useState(0);
	const [show, setShow] = useState(false);

	const bodolt = () => {
		const a = utga.split(" ");
		let s = 0;
		a.forEach((el) => (s += Number(el)));

		setHariu(s);
	};

	return (
		<div>
			<button onClick={() => setShow(!show)}>{asuult}</button>
			{show === true ? (
				<div>
					<input
						type="text"
						placeholder="utgaa oruulna"
						onChange={(e) => setUtga(e.target.value)}
					/>
					<button onClick={bodolt}>bodoh</button>
					<p>{hariu !== 0 ? hariu : ""}</p>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Spoj2;
