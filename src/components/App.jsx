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

import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Users from "./Users";
import { Link, Route, Routes } from "react-router-dom";
import User from "./User";

// npm i react-router-dom

const App = () => {
	return (
		<>
			<Link to={"/users"}>Users</Link>

			<Routes>
				<Route path="/users" element={<Users />} />
				<Route path="/users/:id" element={<User />} />
			</Routes>
		</>
	);
};

export default App;
