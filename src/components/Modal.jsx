import React from "react";

const Modal = ({ isOpen, setShowModal, children, fn }) => {
	// fn();
	console.log("=======>", isOpen);

	return (
		<>
			{isOpen === true ? (
				<div
					style={{
						width: "400px",
						height: "400px",
						background: "#ccc",
					}}
				>
					Modal
					<br />
					<button
						style={{
							border: "1px solid #000",
							padding: "2px 4px",
							marginTop: "30px",
						}}
						onClick={() => setShowModal(false)}
					>
						Continue
					</button>
					{children}
				</div>
			) : (
				""
			)}
		</>
	);
};

export default Modal;
