import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "rgb(45, 45, 45)",
  textColor: "black",
  modalContentColor: "white",
  itemColor: "lightgray",
  inputBackground: "white",
  headerColor: "white",
  buttonTheme: "rgb(45, 45, 45)",
  buttonFontColor: "white",
  removeBg: "#d3d3d3",
  removeFont: "black",
};

export const greenTheme = {
  body: "#d8ffee",
  textColor: "#49866d",
  modalContentColor: "#d8ffee",
  itemColor: "#90c6ab",
  inputBackground: "#d9ffeb",
  headerColor: "#49866d",
  buttonTheme: "#90c6ab",
  buttonFontColor: "#d8ffee",
  removeBg: "#90c6ab",
  removeFont: "#d8ffee",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background: ${(props) => props.theme.body};
	}

	.modal__content {
		color: ${(props) => props.theme.textColor};
		background: ${(props) => props.theme.modalContentColor};
	}

	.item {
		background: ${(props) => props.theme.itemColor};
	}

	.item input {
		background: ${(props) => props.theme.inputBackground};
		color: ${(props) => props.theme.textColor};
	}

	.add input {
		background: ${(props) => props.theme.inputBackground};
		color: ${(props) => props.theme.textColor};
	}

	.empty {
		color: ${(props) => props.theme.headerColor};
	}

	.header .text-header {
		color: ${(props) => props.theme.headerColor};
	}

	.button-theme {
		color: ${(props) => props.theme.buttonFontColor};
		background: ${(props) => props.theme.buttonTheme}
	}
	
	.remove-all {
		color: ${(props) => props.theme.removeFont};
		background: ${(props) => props.theme.removeBg};
	}
 `;
