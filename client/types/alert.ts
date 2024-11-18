export type tAlert = {
	id?: string;
	message: string | string[];
	type: 'success' | 'error' | 'info' | 'warning' | 'danger';
	time?: number;
}

export const DefaultAlert: tAlert = {
	message: '',
	type: 'success',
	time: 3000,
}
