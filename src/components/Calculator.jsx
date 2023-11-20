import React, { useState } from "react";

const Calculator = () => {
	const [value, setValue] = useState("");
	const [history, setHistory] = useState([8, 92]);

	const operators = "1234567890";
	const main = (a) => {
		if (value.length === 0) setValue("0" + a);
		else if (operators.includes(value[value.length - 1]))
			setValue(value + a);
	};

	const clear = () => {
		let a = "";

		for (let i = 0; i < value.length - 1; i++) {
			a += value[i];
		}
		setValue(a);
	};

	const tentsvv = () => {
		const hariu = eval(value);
		setValue(String(hariu));
		setHistory([...history]);
	};

	return (
		<>
			<div>
				<h1>{value.length === 0 ? 0 : value}</h1>

				<button onClick={() => setValue(value + "1")}>1</button>
				<button onClick={() => setValue(value + "2")}>2</button>
				<button onClick={() => setValue(value + "3")}>3</button>
				<button onClick={() => main("+")}>+</button>
				<br />
				<button onClick={() => setValue(value + "4")}>4</button>
				<button onClick={() => setValue(value + "5")}>5</button>
				<button onClick={() => setValue(value + "6")}>6</button>
				<button onClick={() => main("-")}>-</button>
				<br />
				<button onClick={() => setValue(value + "7")}>7</button>
				<button onClick={() => setValue(value + "8")}>8</button>
				<button onClick={() => setValue(value + "9")}>9</button>
				<button onClick={() => main("*")}>*</button>
				<br />
				<button onClick={() => setValue(value + "0")}>0</button>
				<button onClick={() => setValue(value + "00")}>00</button>
				<button onClick={() => main(".")}>.</button>
				<button onClick={() => main("/")}>/</button>
				<br />
				<button onClick={clear}>C</button>
				<button onClick={() => setValue("")}>AC</button>
				<button onClick={tentsvv}>=</button>
			</div>

			<div>
				{history.map((el) => (
					<h1>{el}</h1>
				))}
			</div>
		</>
	);
};

export default Calculator;
