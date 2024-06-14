/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "localhost",
				port: "44393",
				pathname: "/media/**",
			},
		],
	},
};

export default nextConfig;
