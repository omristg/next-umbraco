import React, { useContext } from "react";
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

const LoginForm = ({ toggleRegisterAndLogin }: Props) => {
	const smallText = "don't have an account?";

	return (
		<BoxContainer>
			<FormContainer>
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<MutedLink href="#">Forget your password?</MutedLink>
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
