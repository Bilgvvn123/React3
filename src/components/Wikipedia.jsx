import React, { useState } from "react";
import wiki from "wikipedia";

const Wikipedia = () => {
	const [data, setData] = useState("");
	const [search, setSearch] = useState("");

	async function aa(s) {
		try {
			const page = await wiki.page(s);
			console.log(page);
			//Response of type @Page object
			const summary = await page.summary();
			console.log(summary);
			setData(summary.extract);
		} catch (error) {
			console.log(error);
		}
	}

	const searchValue = () => {
		aa(search);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="utga"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button onClick={searchValue}>search</button>
			<div>{data}</div>
		</div>
	);
};

export default Wikipedia;
