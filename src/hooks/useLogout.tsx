import { authApi } from "@/clientApi/method";
import { logoutDispatch, useAuthContext } from "@/context/authContext";
import { useMutation } from "react-query";

const useLogout = () => {
	const { dispatch } = useAuthContext();

	const { mutate: logout } = useMutation(authApi.logout, {
		onSuccess: () => {
			dispatch(logoutDispatch());
		},
	});

	return { logout };
};

export default useLogout;
