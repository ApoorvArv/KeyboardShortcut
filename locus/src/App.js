import logo from "./logo.svg";
import React, { useCallback, useState } from "react";
import "./App.css";
import ComponentA from "./Components/ComponentItem";
import ComponentB from "./Components/ComponentItem";

function App() {
	console.log("App");

	let color1 = "#486d97";
	let color2 = "#0e3f75";

	const [backgroundColorA, setBackgroundColorA] = useState(color1);
	const [backgroundColorB, setBackgroundColorB] = useState(color2);

	const comboA = "shift a";

	const comboB = "shift b";

	const descriptionA = "A -> Turns the components background color to green";

	const descriptionB = "B -> Turns the components background color to orange";

	const callBackA = useCallback(() => {
		console.log("Callback called for A");
		setBackgroundColorA(color2);
	}, [backgroundColorA]);

	const callBackB = useCallback(() => {
		console.log("Callback called for B");
		console.log("color2");
		setBackgroundColorB(color1);
	}, []);

	return (
		<div className="App">
			<div className="componentsList">
				<ComponentA
					parentName="A"
					callback={callBackA}
					combo={comboA}
					description={descriptionA}
					backgroundColor={backgroundColorA}
				/>
				<ComponentB
					parentName="B"
					callback={callBackB}
					combo={comboB}
					description={descriptionB}
					backgroundColor={backgroundColorB}
				/>
			</div>
		</div>
	);
}

export default App;
