const theme = require("./theme");

module.exports = props => (
	<>
		<p>{props.children}</p>
		<style jsx>{`
			p {
				margin: 0;
				color: ${theme.grey4};
				font-size: 12px;
			}
		`}</style>
	</>
);
