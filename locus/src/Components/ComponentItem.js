import React from "react";
import KeyBoardShortcut from "../KeyBoardShortCut";

function ParentComponent({
	parentName,
	callback,
	combo,
	description,
	backgroundColor,
}) {
	return (
		<div
			className="singleComponent"
			style={{ backgroundColor: backgroundColor }}
		>
			Parent {parentName}
			<KeyBoardShortcut
				combo={combo}
				callback={callback}
				description={description}
				componentName={parentName}
			/>
		</div>
	);
}

export default React.memo(ParentComponent);
