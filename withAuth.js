const nextCookie = require("next-cookies");
const axios = require("axios");

module.exports = (WrappedComponent, apiUrl, allowGuest) => {
	const Wrapper = props => {
		if (props.user || allowGuest) {
			return <WrappedComponent {...props} />;
		} else {
			return <p>Unauthorized</p>;
		}
	};

	Wrapper.getInitialProps = async ctx => {
		const user = await auth(ctx, apiUrl);

		//Unauthorized Redirect
		if (!user && !allowGuest) {
			const redirectUrl = `https://alles.cx/login?redirect=${encodeURIComponent(
				ctx.req
					? "https://" + ctx.req.headers.host + ctx.req.url
					: window.location.href
			)}`;

			// https://github.com/zeit/next.js/blob/canary/examples/with-cookie-auth/utils/auth.js#L16
			if (typeof window === "undefined") {
				ctx.res.writeHead(302, {Location: redirectUrl});
				ctx.res.end();
			} else {
				window.location.href = redirectUrl;
			}
			return {user: null};
		}

		//Child getIntialProps
		ctx.user = user;
		const childProps = WrappedComponent.getInitialProps
			? await WrappedComponent.getInitialProps(ctx)
			: {};

		//Return Props
		return {
			user,
			...childProps
		};
	};

	return Wrapper;
};

const auth = async (ctx, apiUrl) => {
	const {sessionToken} = nextCookie(ctx);
	if (!sessionToken) return;
	var apiReq;
	try {
		apiReq = await axios.get(apiUrl, {
			headers: {
				authorization: sessionToken
			}
		});
	} catch (err) {
		return;
	}

	return {
		sessionToken,
		...apiReq.data
	};
};
