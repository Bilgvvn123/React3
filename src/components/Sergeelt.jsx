import React, { useState } from "react";

const Sergeelt = ({ hariult, asuult }) => {
	const [show, setShow] = useState(false);
	let a = false;

	return (
		<div>
			<button
				onClick={() => {
					a = !a;

					setShow(!show);
				}}
			>
				{asuult}
			</button>
			{show === true ? hariult : ""}
		</div>
	);
};

export default Sergeelt;
