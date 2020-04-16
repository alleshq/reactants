import Link from "next/link";
import theme from "./theme";
import {Fragment} from "react";

export default props => (
	<header>
		<div className="headerMain">
			<Link href="/">
				<a className="home">{props.title}</a>
			</Link>
			{props.breadcrumbs ? (
				props.breadcrumbs.map((segment, i) => (
					<Fragment key={i}>
						<span>/</span>
						{segment.href ? (
							<Link href={segment.href} as={segment.as}>
								<a className="bc">{segment.name}</a>
							</Link>
						) : (
							<a className="bc">{segment.name}</a>
						)}
					</Fragment>
				))
			) : (
				<></>
			)}
		</div>

		{props.userId ? (
			<Link href="/me">
				<a className="profilePicture">
					<img src={`https://avatar.alles.cx/user/${props.userId}`} />
				</a>
			</Link>
		) : (
			<></>
		)}

		<style jsx>{`
			header {
				display: flex;
				padding: 10px;
				border-bottom: solid 1px ${theme.borderGrey};
				flex-shrink: 0;
			}

			.headerMain {
				flex-grow: 1;
				display: flex;
				overflow-x: auto;
				font-size: 25px;
				vertical-align: middle;
			}

			a.home {
				color: inherit;
				text-decoration: none;
				padding: 0 10px;
				margin: auto 5px;
				font-weight: 700;
			}

			.headerMain span {
				color: ${theme.grey8};
				font-size: 15px;
				margin: auto 0;
				cursor: default;
			}

			.headerMain a.bc {
				color: ${theme.grey4};
				margin: auto 15px;
				font-size: 15px;
			}

			.headerMain a.bc:not([href]) {
				cursor: default;
			}

			a.profilePicture {
				margin: auto 0 auto 5px;
			}

			a.profilePicture img {
				border: solid 1px ${theme.borderGrey};
				border-radius: 50%;
				height: 2.5em;
				width: 2.5em;
				cursor: pointer;
				display: block;
			}
		`}</style>
	</header>
);
