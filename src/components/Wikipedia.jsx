import React, { useState } from "react";
import wiki from "wikipedia";

const Wikipedia = () => {
	const [data, setData] = useState("");
	const [haihUtga, setHaihUtga] = useState("");

	async function aa(a) {
		try {
			const page = await wiki.page(a);
			const summary = await page.summary();
			setData(summary.extract);
		} catch (error) {
			console.log(error);
			//=> Typeof wikiError
		}
	}

	function search1() {
		aa(haihUtga);
	}

	return (
		<div>
			<input
				type="text"
				placeholder="utga"
				onChange={(e) => setHaihUtga(e.target.value)}
			/>
			<button onClick={search1}>haih</button>

			<p>{data.length !== 0 ? data : "No data"}</p>
		</div>
	);
};

export default Wikipedia;
