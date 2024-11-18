<template>
	<h3>Utilisateurs</h3>
	<table class="table table-primary table-striped">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Prénom</th>
				<th scope="col">Nom</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users">
				<th scope="row">{{ user.id }}</th>
				<td>{{ user.firstname }}</td>
				<td>{{ user.lastname }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">

const users = ref([
	{
		id: 1,
		firstname: 'Martin',
		lastname: 'Palmer',
	},
	{
		id: 2,
		firstname: 'Branxtourne',
		lastname: 'Polar',
	},
	{
		id: 3,
		firstname: 'Mirco',
		lastname: 'Bigout',
	},
]);

</script>