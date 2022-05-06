// Colors
const blue = "#279EE9";
const red = "#F17148";
const grey = "#BDBDBD";
const lightGrey = "#FBFBFB";
const white = "#FFFFFF";
const black = "#3D4042";
const veryBlack = "#36383D";

// Themes

export const light = {
	text: black,
	textBg: white,
	background: lightGrey,
};

export const dark = {
	text: white,
	textBg: black,
	background: veryBlack,
};

export const generalColors = {
	blue: blue,
	red: red,
	grey: grey,
	white: white,
	modalBg: "rgba(189,189,189,0.7)"
};

// Helper functions
export const handleColorTransType = (type) => {
	switch (type) {
		case "income":
			return generalColors.blue;
		case "expense":
			return generalColors.red;
		case "error":
			return generalColors.red;
		case "transData":
			return generalColors.grey;
		default:
			return false;
	}
};

export const handleColorButtonType = (type) => {
	switch (type) {
		case "save":
			return generalColors.blue;
		case "delete":
			return generalColors.red;
		default:
			return false;
	}
};