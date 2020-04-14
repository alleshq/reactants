import theme from "./theme";

export default () => (
	<style jsx global>{`
		@import url("https://fonts.googleapis.com/css?family=Material+Icons|Rubik:400,500,700,900&display=swap");
		
		html,
		body,
		body > div:first-child,
		div#__next,
		.page {
			height: 100%;
			margin: 0;
			font-family: Rubik;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		a.normal {
			color: ${theme.accent};
			text-decoration: underline;
		}

		.material-icons {
			-webkit-user-select: none;
		}
	`}</style>
);
