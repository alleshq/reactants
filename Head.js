const Head = require("next/head");

module.exports = props => (
	<Head>
		<title>{props.title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link
			rel="stylesheet"
			src="https://fonts.googleapis.com/css?family=Material+Icons|Rubik:400,500,700,900&display=swap"
		/>
		{props.children}
	</Head>
);
