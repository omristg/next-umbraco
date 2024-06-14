import { authApi } from "@/clientApi/method";
import { useMutation } from "react-query";

const useTestLogin = () => {
	const { mutate: testLogin, data: testLoginResult } = useMutation(
		authApi.testLogin
	);
	return { testLogin, testLoginResult };
};

export default useTestLogin;
