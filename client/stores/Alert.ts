import { defineStore } from "pinia";
import { DefaultAlert, type tAlert } from "~/types/alert";

export const useAlertStore = defineStore('alert', () => {
	const _alerts = ref<tAlert[]>([]);

	return {
		get alerts() {
			return _alerts;
		},

		add(alert: tAlert) {
			alert.id = Math.random().toString(36).substring(2, 9);
			if (!alert.time)
				alert.time = DefaultAlert.time
			_alerts.value.push(alert);

			setTimeout(() => {
				this.remove(alert.id!);
			}, alert.time);
		},

		success(message: string, time?: number) {
			this.add({ type: 'success', message, time });
		},

		error(message: string, time?: number) {
			this.add({ type: 'error', message, time });
		},

		danger(message: string, time?: number) {
			this.add({ type: 'danger', message, time });
		},

		info(message: string, time?: number) {
			this.add({ type: 'info', message, time });
		},

		warning(message: string, time?: number) {
			this.add({ type: 'warning', message, time });
		},

		remove(id: string) {
			const index = _alerts.value.findIndex((alert) => alert.id === id);
			if (index !== -1)
				_alerts.value.splice(index, 1);
		},

		clear() {
			_alerts.value = [];
		},

		getTitle(type: tAlert['type']) {
			switch (type)
			{
				case 'success':
					return '<i class="bi bi-check-circle-fill"></i>';
				case 'error':
					return '<i class="bi bi-x-circle-fill"></i>';
				case 'info':
					return '<i class="bi bi-info-circle-fill"></i>';
				case 'warning':
					return '<i class="bi bi-exclamation-triangle-fill"></i>';
				case 'danger':
					return '<i class="bi bi-exclamation-diamond-fill"></i>';
				default:
					return `Type non valide (${type})`;
			}
		}
	};
});
