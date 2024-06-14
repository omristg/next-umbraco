import { authApi } from "@/clientApi/method";
import { loginDispatch, useAuth } from "@/context/authContext";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

const useLogin = (email: string, password: string) => {
	const { dispatch } = useAuth();

	const { mutate: login } = useMutation(
		"login",
		() => authApi.login(email, password),
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
