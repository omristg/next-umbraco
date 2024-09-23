import { noop } from "@/global/utils";
import * as React from "react";

type AuthActionType = "LOGIN" | "LOGOUT";
type AuthAction = { type: AuthActionType; payload: User | null };
type User = {
	email: string;
	name: string;
};

type AuthState = {
	isLoggedIn: boolean;
	loggedInUser: User | null;
	dispatch: React.Dispatch<AuthAction>;
};

const initialState: AuthState = {
	isLoggedIn: false,
	loggedInUser: null,
	dispatch: noop,
};

const AuthContext = React.createContext<AuthState>(initialState);

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [state, dispatch] = React.useReducer(authReducer, initialState);

	const value = React.useMemo(() => ({ ...state, dispatch }), [state]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, isLoggedIn: true, loggedInUser: action.payload };
		case "LOGOUT":
			return { ...state, isLoggedIn: false, loggedInUser: null };
		default:
			return state;
	}
};

export const useAuthContext = () => React.useContext(AuthContext);
export const logoutDispatch = (): AuthAction => ({
	type: "LOGOUT",
	payload: null,
});
export const loginDispatch = (user: User): AuthAction => ({
	type: "LOGIN",
	payload: user,
});

export default AuthContext;
