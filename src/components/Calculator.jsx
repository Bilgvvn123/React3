import React, { useState } from "react";

const Calculator = () => {
	const [value, setValue] = useState("");

	const main = (a) => {
		let isAdd = false;
		for (let i = 0; i < value.length; i++) {
			if (value[i] == a) isAdd = true;
		}
		if (isAdd === false && !value[0]) setValue(value + "0" + a);
		else if (isAdd === false) setValue(value + a);
	};

	const clear = () => {
		let a = "";

		for (let i = 0; i < value.length - 1; i++) {
			a += value[i];
		}
		setValue(a);
	};

	return (
		<div>
			<h1>{value ? value : 0}</h1>

			<button onClick={() => setValue(value + 1)}>1</button>
			<button onClick={() => setValue(value + 2)}>2</button>
			<button onClick={() => setValue(value + 3)}>3</button>
			<button onClick={() => main("+")}>+</button>

			<button onClick={() => setValue(value + 4)}>4</button>
			<button onClick={() => setValue(value + 5)}>5</button>
			<button onClick={() => setValue(value + 6)}>6</button>
			<button onClick={() => main("-")}>-</button>

			<button onClick={() => setValue(value + 7)}>7</button>
			<button onClick={() => setValue(value + 8)}>8</button>
			<button onClick={() => setValue(value + 9)}>9</button>
			<button onClick={() => main("*")}>*</button>

			<button onClick={() => setValue(value + 0)}>0</button>
			<button onClick={() => setValue(value + "00")}>00</button>
			<button onClick={() => main(".")}>.</button>
			<button onClick={() => main("/")}>/</button>

			<button onClick={clear}>C</button>
			<button onClick={() => setValue("")}>AC</button>
			<button onClick={() => setValue(eval(value))}>=</button>
		</div>
	);
};

export default Calculator;
