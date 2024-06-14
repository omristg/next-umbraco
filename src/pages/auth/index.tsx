import LoginOrRegister from "@/Components/auth/loginOrRegister";
import { useAuth, logoutDispatch } from "@/context/authContext";
import * as React from "react";
import styled from "styled-components";

const AuthPage = () => {
	const { isLoggedIn, dispatch } = useAuth();

	const logout = () => dispatch(logoutDispatch());

	return (
		<Container>
			{isLoggedIn ? (
				<>
					<h1>Logged In</h1>
					<button onClick={logout}>Logout</button>
				</>
			) : (
				<LoginOrRegister />
			)}
		</Container>
	);
};

const Container = styled.div.attrs({ className: "" })``;

export default AuthPage;
