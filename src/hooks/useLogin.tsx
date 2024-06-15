import { authApi } from "@/clientApi/method";
import { loginDispatch, useAuth } from "@/context/authContext";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type LoginParams = {
	email: string;
	password: string;
};

const useLogin = () => {
	const { dispatch } = useAuth();

	const { mutate: login } = useMutation(
		"login",
		({ email, password }: LoginParams) => authApi.login(email, password),
		{
			onSuccess: () => {
				dispatch(loginDispatch({ email: "omristg@gmail.com", name: "test" }));
			},
			onError: (err: AxiosError) => console.log(err.response?.data),
		}
	);

	return { login };
};

export default useLogin;
