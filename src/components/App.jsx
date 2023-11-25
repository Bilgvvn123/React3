import React, { useState } from "react";
import Sergeelt from "./Sergeelt";
import Onchange from "./Onchange";
import Spoj from "./Spoj";
import Wikipedia from "./Wikipedia";
import Todo from "./Todo";
import Spoj2 from "./Spoj2";
import Modal from "./Modal";
import Calculator from "./Calculator";
import UseEffect from "./UseEffect";
import Daalgawar from "./Daalgawar";

// import Modal from "react-modal";

import { Link, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";

// npm i react-router-dom

const App = () => {
	return (
		<>
			<Link to="/">Nvvr</Link>
			<Link to="/about">Tuhai</Link>
			<Link to="/contact">Holbogdoh</Link>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
};

export default App;
