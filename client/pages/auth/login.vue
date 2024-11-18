<template>
	<div>
		<h3>Connexion</h3>
		<form @submit.prevent="store.login(login)">
			<div class="form-group mb-3">
				<label for="email">Email</label>
				<input class="form-control" v-model="login.email" type="email" id="email" name="email" required>
			</div>
			<div class="form-group mb-3">
				<label for="password">Mot de passe</label>
				<input class="form-control" v-model="login.password" type="password" id="password" name="password" required>
			</div>
			<button type="submit" class="btn btn-primary me-3">Connexion</button>
			<nuxt-link to="/auth/register" class="btn text-primary">S'inscrire</nuxt-link>
		</form>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/Auth';
import { DefaultLogin, type tLogin } from '~/types/auth';

const login = ref<tLogin>({...DefaultLogin});
const store = useAuthStore();

</script>