import React from "react";

const Card = ({ a }) => {
	return (
		<div style={{ display: "flex", gap: "200px" }}>
			<div style={{ background: "pink" }}>
				<img
					style={{
						height: "300px",
						width: "100%",
						background: "#ccc",
					}}
					src={a.url}
					alt=""
				/>
				<h1>{a.title}</h1>
				<p>{a.id}</p>
			</div>
		</div>
	);
};

export default Card;
