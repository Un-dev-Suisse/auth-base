<template>
	<div>
		<h3>Inscription</h3>
		<form @submit.prevent="store.register(register)">
			<div class="form-group mb-3">
				<label for="email">Email</label>
				<input class="form-control" v-model="register.email" type="email" id="email" name="email" required>
			</div>
			<div class="form-group mb-3">
				<label for="password">Mot de passe</label>
				<input class="form-control" v-model="register.password" type="password" id="password" name="password" required>
			</div>
			<div class="form-group mb-3">
				<label for="confirm_password">Confirmation du mot de passe</label>
				<input class="form-control" v-model="register.confirm_password" type="password" id="confirm_password" name="confirm_password" required>
			</div>
			<button type="submit" class="btn btn-primary me-3">S'inscrire</button>
			<nuxt-link to="/auth/login" class="btn text-primary">Connexion</nuxt-link>
		</form>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/Auth';
import { DefaultRegister, type tRegister } from '~/types/auth';

const register = ref<tRegister>({...DefaultRegister});
const store = useAuthStore();

</script>