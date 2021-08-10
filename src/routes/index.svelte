<script context="module">
	import { client } from '$lib/commerce.js';

	export async function load(params) {
		const { data: categories } = await client.categories.list();
		const { data: products } = await client.products.list();

		return {
			props: {
				categories,
				products
			}
		};
	}
</script>

<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	export let categories;
	export let products;
</script>

<Navbar />

<div class="container">
	<div class="row">
		<div class="col-md px-4">
			<h3>Categories</h3>
			<ul class="list-unstyled">
				{#each categories as category}
					<li class="py-1">
						<a rel="prefetch" href="/categories/{category.slug}">{category.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="col-md px-4">
			<h3>Products</h3>
			<ul class="list-unstyled">
				{#each products as product}
					<li class="py-1">
						<a rel="prefetch" href="/products/{product.permalink}">{product.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	h3 {
		border-bottom: 1px solid rebeccapurple;
	}
</style>
