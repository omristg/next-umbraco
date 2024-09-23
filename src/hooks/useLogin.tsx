import { authApi } from "@/clientApi/method";
import { loginDispatch, useAuthContext } from "@/context/authContext";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type LoginParams = {
	email: string;
	password: string;
};

const useLogin = () => {
	const { dispatch } = useAuthContext();

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
