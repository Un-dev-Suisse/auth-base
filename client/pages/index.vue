<template>
	<h1>Hello {{ store.user.email || 'Inconnu' }}</h1>
	<nuxt-link to="/auth/login" class="btn btn-primary" v-if="!store.user.id">Connexion</nuxt-link>
	<button type="button" class="btn btn-danger" @click="store.logout" v-else>Se déconnecter</button>
</template>

<script setup lang="ts">

const store = useAuthStore();

</script>
