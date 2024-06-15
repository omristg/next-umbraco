import * as React from "react";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	LineText,
	MutedLink,
	SubmitButton,
} from "./common.styles";
import { Marginer } from "./marginer";
import useLogin from "@/hooks/useLogin";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
	toggleRegisterAndLogin: (action: "register" | "login") => void;
};

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = ({ toggleRegisterAndLogin }: Props) => {
	const smallText = "don't have an account?";

	const { register, handleSubmit } = useForm<FormValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { login } = useLogin();

	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		console.log(data);
		const { email, password } = data;
		login({ email, password });
	};

	return (
		<BoxContainer onSubmit={handleSubmit(onSubmit)}>
			<FormContainer>
				<Input {...register("email")} type="email" placeholder="Email" />
				<Input
					{...register("password")}
					type="password"
					placeholder="Password"
				/>
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<MutedLink href="/forgot-password">Forgot your password?</MutedLink>
			<Marginer direction="vertical" margin="1.6em" />
			<SubmitButton type="submit">Login</SubmitButton>
			<Marginer direction="vertical" margin="5px" />
			<LineText>
				{smallText}
				<BoldLink onClick={() => toggleRegisterAndLogin("register")} href="#">
					Sign up
				</BoldLink>
			</LineText>
		</BoxContainer>
	);
};

export default LoginForm;
