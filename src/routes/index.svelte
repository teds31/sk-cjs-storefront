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
	export let categories;
	export let products;
</script>

<div class="container">
	<div class="flex space-x-24 justify-center">
		<div class="flex-col my-4">
			<h3 class="text-2xl mb-4 border-b">Categories</h3>
			<ul class="list-unstyled">
				{#each categories as category}
					<li class="py-1">
						<a rel="prefetch" href="/categories/{category.slug}">{category.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex-col my-4">
			<h3 class="text-2xl mb-4 border-b">Products</h3>
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
	a:hover {
		color: rebeccapurple;
		text-decoration: underline;
	}
</style>
