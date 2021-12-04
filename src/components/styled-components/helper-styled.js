import { generalColors } from "./ThemeColors.styled";

export const handleColorTransType = (type) => {
	switch (type) {
		case "income":
			return generalColors.blue;
		case "expense":
			return generalColors.red;
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
