import { defineStore } from "pinia";
import type { tLogin, tRegister } from "~/types/auth";
import { DefaultUser, type tUser } from "~/types/user";

export const useAuthStore = defineStore('auth', () => {
	const user = ref<tUser>({...DefaultUser});

	async function register(data: tRegister) {
		const response = await $fetch<tUser>('http://localhost:8000/auth/register', {
			onResponseError({ response }) {
				useAlertStore().error(response._data.message);
			},
			method: 'POST',
			credentials: 'include',
			body: data,
		});

		user.value = response;

		navigateTo('/');
	}

	async function login(data: tLogin) {
		const response = await $fetch<tUser>('http://localhost:8000/auth/login', {
			onResponseError({ response }) {
				useAlertStore().error(response._data.message);
			},
			method: 'POST',
			credentials: 'include',
			body: data,
		});

		user.value = response;

		navigateTo('/');
	}

	async function logout() {
		await $fetch('http://localhost:8000/auth/logout', {
			method: 'POST',
			credentials: 'include',
		});

		window.location.reload();
	}

	return {
		user,
		login,
		register,
		logout,
	};
});