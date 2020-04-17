import theme from "./theme";
import {Plus} from "react-feather";

export default () => (
	<div>
		<Plus />
		<style jsx>{`
			div {
				position: fixed;
				bottom: 50px;
				right: 50px;
				width: 24px;
				height: 24px;
				text-align: center;
				background: #ffffff;
				color: ${theme.grey4};
				padding: 20px;
				border: solid 1px ${theme.borderGrey};
				border-radius: 50%;
				box-shadow: 0 0 10px -5px ${theme.grey8};
				transition-duration: 0.1s;
			}

			div:hover {
				box-shadow: 0 0 50px -5px ${theme.grey8};
			}
		`}</style>
	</div>
);
