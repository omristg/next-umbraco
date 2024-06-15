import * as React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import * as Params from "@/clientApi/params";
import { authApi } from "@/clientApi/method";
import { useRouter } from "next/router";

type FormValues = {
	newPassword: string;
	confirmPassword: string;
};

const ResetPassword = () => {
	const { query } = useRouter();

	const email = query.email as string;
	const token = query.token as string;
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>();
	const newPassword = watch("newPassword");

	const { mutate: resetPassword } = useMutation(
		"reset-password",
		(params: Params.ResetPassword) => authApi.resetPassword(params)
	);

	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		if (!email || !token) throw new Error("Email and token are required");
		resetPassword({
			email: email,
			newPassword: data.newPassword,
			token: token,
		});
	};

	return (
		<div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
			<h2>Reset Password</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>New Password</label>
					<input
						type="password"
						{...register("newPassword", {
							required: "New Password is required",
							minLength: {
								value: 6,
								message: "Password must be at least 6 characters",
							},
						})}
					/>
					{errors.newPassword && <p>{errors.newPassword.message}</p>}
				</div>

				<div>
					<label>Confirm Password</label>
					<input
						type="password"
						{...register("confirmPassword", {
							required: "Confirm Password is required",
							validate: (value) =>
								value === newPassword || "Passwords do not match",
						})}
					/>
					{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
				</div>

				<button type="submit">Reset Password</button>
			</form>
		</div>
	);
};

export default ResetPassword;
