import React from "react";

const HelloContext = React.createContext();
const Hello = ({ children }) => {
	return <HelloContext state={{ hi: "GG" }}>{children}</HelloContext>;
};

export default Hello;
