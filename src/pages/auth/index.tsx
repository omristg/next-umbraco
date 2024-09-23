import LoginOrRegister from "@/Components/auth/loginOrRegister";
import { useAuthContext, logoutDispatch } from "@/context/authContext";
import * as React from "react";
import styled from "styled-components";

const AuthPage = () => {
	const { isLoggedIn, dispatch } = useAuthContext();

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
