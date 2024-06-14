import * as React from "react";
import styled from "styled-components";
import useLogin from "@/hooks/useLogin";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import RegisterForm from "./registerForm";

const LoginOrRegister = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const { login } = useLogin(email, password);
	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login();
	};
	const [isExpanded, setExpanded] = React.useState(false);
	const [isRegister, setIsRegister] = React.useState(false);

	const playExpandingAnimation = () => {
		setExpanded(true);
		setTimeout(() => {
			setExpanded(false);
		}, expandingTransition.duration * 1000 - 1500);
	};

	const toggleRegisterAndLogin = React.useCallback(
		(action: "register" | "login") => {
			playExpandingAnimation();
			setTimeout(() => {
				setIsRegister(action === "register");
			}, 400);
		},
		[]
	);

	return (
		<Container>
			<BoxContainer>
				<TopContainer>
					<BackDrop
						initial={false}
						animate={isExpanded ? "expanded" : "collapsed"}
						variants={backdropVariants}
						transition={expandingTransition}
					/>
					{isRegister ? (
						<HeaderContainer>
							<HeaderText>Create</HeaderText>
							<HeaderText>Account</HeaderText>
							<SmallText>Please sign-up to continue!</SmallText>
						</HeaderContainer>
					) : (
						<HeaderContainer>
							<HeaderText>Welcome</HeaderText>
							<HeaderText>Back</HeaderText>
							<SmallText>Please sign-in to continue!</SmallText>
						</HeaderContainer>
					)}
				</TopContainer>
				<InnerContainer>
					{isRegister ? (
						<RegisterForm toggleRegisterAndLogin={toggleRegisterAndLogin} />
					) : (
						<LoginForm toggleRegisterAndLogin={toggleRegisterAndLogin} />
					)}
				</InnerContainer>
			</BoxContainer>
		</Container>
	);
};

const Container = styled.div.attrs({ className: "auth-container" })`
	display: grid;
	place-items: center;
	height: calc(100vh - 80px);
`;

const BoxContainer = styled.div`
	width: 280px;
	min-height: 550px;
	display: flex;
	flex-direction: column;
	border-radius: 19px;
	background-color: #fff;
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	overflow: hidden;
`;

const TopContainer = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 1.8em;
	padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
	position: absolute;
	width: 160%;
	height: 550px;
	display: flex;
	flex-direction: column;
	border-radius: 50%;
	top: -290px;
	left: -70px;
	transform: rotate(60deg);
	background: linear-gradient(58deg, #12b3f3 20%, #0f78f1 100%);
`;

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const HeaderText = styled.div`
	font-size: 30px;
	font-weight: 600;
	line-height: 1.24;
	color: #fff;
	z-index: 10;
`;

const SmallText = styled.div`
	font-size: 11px;
	font-weight: 500;
	color: #fff;
	margin-top: 7px;
	z-index: 10;
`;

const InnerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0px 20px;
`;

const backdropVariants = {
	expanded: {
		width: "233%",
		height: "1050px",
		borderRadius: "20%",
		transform: "rotate(60deg)",
	},
	collapsed: {
		width: "160%",
		height: "550px",
		borderRadius: "50%",
		transform: "rotate(60deg)",
	},
};

const expandingTransition = {
	type: "spring",
	duration: 2.3,
	stiffness: 30,
};

export default LoginOrRegister;
