import * as React from "react";
import { useMutation } from "react-query";
import { authApi } from "@/clientApi/method";
import styled from "styled-components";
import { AxiosError } from "axios";

const Login = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const { mutate: login } = useMutation(
		"login",
		() => authApi.login(email, password),
		{
			onSettled: (res) => {
				console.log(res);
			},
			onError: (err: AxiosError) => console.log(err.response?.data),
		}
	);

	const { mutate: testLogin } = useMutation(authApi.testLogin, {
		onSettled: (data) => console.log(data),
	});

	const { mutate: logout } = useMutation(authApi.logout, {
		onSettled: (data) => console.log(data),
	});

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login();
	};

	return (
		<Container>
			<button onClick={() => testLogin()}>Test Login</button>
			<button onClick={() =>  logout()}>Logout</button>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					type="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<button type="submit">Submit</button>
			</form>
		</Container>
	);
};

const Container = styled.div.attrs({ className: "login-section" })``;

export default Login;
