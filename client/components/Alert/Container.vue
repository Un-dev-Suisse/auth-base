<template>
	<div id="alert-container">
		<Alert
			v-for="alert in store.alerts"
			:title="store.getTitle(alert.type)"
			:message="alert.message"
			:type="alert.type"
			:remove="() => store.remove(alert.id!)"
			:key="alert.id"
		/>
	</div>
</template>

<script setup lang="ts">

const store = useAlertStore();

</script>

<style scoped>
#alert-container {
	position: fixed;
	top: 1dvh;
	right: 1dvh;
	padding-top: 0;
	padding-bottom: 0;
	max-width: 300px;
	width: 100%;
}

@media screen and (max-width: 768px) {
	#alert-container {
		max-width: 225px;
	}
}
</style>