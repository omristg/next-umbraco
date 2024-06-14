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

type Props = {
	toggleRegisterAndLogin: (action: "register" | "login") => void;
};

const RegisterForm = ({ toggleRegisterAndLogin }: Props) => {
	return (
		<BoxContainer>
			<FormContainer>
				<Input type="text" placeholder="Full name" />
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Input type="password" placeholder="Confirm password" />
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit">Signup</SubmitButton>
			<Marginer direction="vertical" margin="5px" />
			<LineText>
				Already have an account?{" "}
				<BoldLink onClick={() => toggleRegisterAndLogin("login")} href="#">
					Signin
				</BoldLink>
			</LineText>
		</BoxContainer>
	);
};

export default RegisterForm;
