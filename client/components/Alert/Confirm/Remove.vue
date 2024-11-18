<template>
	<div class="modal fade" id="modal-confirm" tabindex="-1" aria-labelledby="modal-confirmLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="modal-confirmLabel">{{ props.title }}</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					{{ props.message }}
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
					<button type="button" class="btn btn-danger" @click="props.onConfirm" data-bs-dismiss="modal">Supprimer</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	onConfirm: {
		type: Function,
		required: true
	}
});

</script>