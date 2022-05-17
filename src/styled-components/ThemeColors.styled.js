// Colors
const blue = "#279EE9";
const red = "#F17148";
const grey = "#BDBDBD";
const lightGrey = "#FBFBFB";
const white = "#FFFFFF";
const black = "#292C2E";
const veryBlack = "#2C2D30";

// Themes

export const light = {
	text: black,
	textBg: white,
	background: lightGrey,
	themeTogglerBg: grey,
};

export const dark = {
	text: white,
	textBg: black,
	background: veryBlack,
	themeTogglerBg: black,
};

export const generalColors = {
	blue: blue,
	red: red,
	grey: grey,
	white: white,
	modalBg: "rgba(189,189,189,0.7)"
};

// Pie chart colors
export const income = [
	"#023E8A",
	"#0077B6",
	"#0096C7",
	"#00B4D8",
	"#48CAE4",
	"#82DDED",
	"#ADE8F4",
	"#CAF0F8",
];

export const expense = [
	"#800F2F",
	"#A4133C",
	"#C9184A",
	"#FF4D6D",
	"#FF758F",
	"#FF8FA3",
	"#FFB3C1",
	"#FFF0F3",
];

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