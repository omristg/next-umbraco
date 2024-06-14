import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = React.PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
	const { pathname } = useRouter();
	const isActive = (path: string) => pathname === path;

	const routes = [
		{
			displayName: "Products",
			route: "/products",
		},
		{
			displayName: "People",
			route: "/people",
		},
		{
			displayName: "Auth",
			route: "/auth",
		},
	];

	return (
		<Container>
			<header className="app-header">
				<h2 className="app-title">Next Umbraco App</h2>
				<nav>
					<ul>
						{routes.map(({ route, displayName }) => {
							return (
								<li key={route}>
									<StyledLink href={route} isActive={isActive(route)}>
										{displayName}
									</StyledLink>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			<main className="layout-container">{children}</main>
		</Container>
	);
};

const StyledLink = styled(Link)<{ isActive: boolean }>`
	color: ${({ isActive }) => (isActive ? "#549fe9;" : "white")};
`;

const Container = styled.div.attrs({ className: "layout-container" })`
	.app-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: var(--layout-padding);
		height: 80px;
		background-color: #333;
		color: white;

		nav ul {
			display: flex;
			gap: 1.2rem;
		}
	}

	.layout-container {
		padding-inline: var(--layout-padding);
	}
`;

export default Layout;
