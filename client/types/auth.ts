export type tLogin = {
	email: string;
	password: string;
};

export type tRegister = tLogin & {
	confirm_password: string;
};

export const DefaultLogin: tLogin = {
	email: '',
	password: '',
};

export const DefaultRegister: tRegister = {
	...DefaultLogin,
	confirm_password: '',
};
