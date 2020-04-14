import Head from "next/head";

export default props => (
	<Head>
		<title>{props.title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		{props.children}
	</Head>
);
