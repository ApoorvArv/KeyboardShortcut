import React from "react";
import Keypress from "keypress.js";
import { createContext } from "react";

export const KeyBoardContext = createContext({});

class KeyBoardShortcut extends React.PureComponent {
	libraryDoc = {};
	constructor(props) {
		super(props);
		this.state = {};

		this.listener = new Keypress.Listener();
	}

	componentDidMount() {
		console.log("this.props did mount", this.props);

		this.runSimpleCombo();
		this.addEventToLibraryDoc();
	}

	runSimpleCombo = () => {
		const { combo, callback } = this.props;

		this.listener.simple_combo(combo, callback);
	};

	addEventToLibraryDoc = () => {
		let { componentName, combo, description } = this.props;

		let libraryFunctionalityString = `${combo.toUpperCase()} : ${description}`;

		let libraryFunctionalityEvent = {};

		libraryFunctionalityEvent[combo] = libraryFunctionalityString;

		if (!this.libraryDoc[componentName]) {
			this.libraryDoc[componentName] = [];
		}

		// add more checks in case library checks are not working
		this.libraryDoc[componentName].push(libraryFunctionalityEvent);

		console.log("libraryDoc", this.libraryDoc);
	};

	componentWillUnmount() {
		console.log("do some stuff");
	}

	render() {
		return <div>Keyboard Shortcut Component </div>;
	}
}

export default KeyBoardShortcut;
