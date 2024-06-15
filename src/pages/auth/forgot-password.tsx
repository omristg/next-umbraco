import { BoxContainer, SubmitButton } from "@/Components/auth/common.styles";
import { authApi } from "@/clientApi/method";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import styled from "styled-components";

const ForgotPassword = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			email: "",
		},
	});

	const { mutate } = useMutation("forgot-password", (email: string) =>
		authApi.forgotPassword(email)
	);

	const onSubmit = (data: { email: string }) => {
		mutate(data.email);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("email")} placeholder="email" />
				<SubmitButton type="submit">Send to mail</SubmitButton>
			</form>
		</Container>
	);
};

const Container = styled.div.attrs({ className: "forgot-password-page" })`
	display: grid;
	place-items: center;
	height: calc(100vh - 80px);
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
`;

export default ForgotPassword;
