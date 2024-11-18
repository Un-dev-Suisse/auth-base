<template>
	<div class="alert" :class="type">
		<span class="close-btn" @click="remove">&times;</span>
		<div v-if="typeof message === 'string'">
			<strong class="title me-2" v-html="title"></strong>
			<span class="content me-2">
				{{ message }}
			</span>
		</div>
		<div class="content" v-else>
			<strong class="title me-2" v-html="title"></strong>
			<ul>
				<li v-for="m in message">{{ m }}</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">

const { title, message, type, remove } = defineProps({
	title: {
		type: String,
		required: false,
		default: 'Succès'
	},
	message: {
		type: [String, Array<String>],
		required: true
	},
	type: {
		type: String,
		required: false,
		default: 'success'
	},
	remove: {
		type: Function as PropType<() => void>,
		required: true
	}
});

</script>

<style scoped>

.alert {
	position: relative;
	padding: 10px;
	border-radius: 4px;
	background-color: white;
	width: 100%;
	animation: display 0.5s ease 0s 1 alternate forwards;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@keyframes display {
	0% {
		transform: translateX(115%);
	}

	100% {
		transform: translateX(0);
	}
}

.success {
	color: #4CAF50;
}

.error, .danger {
	color: #f44336;
}

.info {
	color: #ffea03;
}

strong {
	font-weight: bold;
}

.content {
	font-family: 'sans-serif';
}

.close-btn {
	position: absolute;
	top: 5px;
	right: 10px;
	font-size: 20px;
	cursor: pointer;
}

.close-btn:hover {
	color: rgba(255, 255, 255, 0.5);
}
</style>