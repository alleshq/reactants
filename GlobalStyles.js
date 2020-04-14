const theme = require("./theme");

module.exports = () => (
	<style jsx global>{`
		html,
		body,
		body > div:first-child,
		div#__next,
		.page {
			height: 100%;
			margin: 0;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		a.normal {
			color: ${theme.accent};
			text-decoration: underline;
		}
	`}</style>
);
