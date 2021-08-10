<script context="module">
	import { client } from '$lib/commerce.js';

	export async function load({ page }) {
		const { slug } = page?.params;

		const category = await client.categories.retrieve(slug, {
			type: 'slug'
		});

		const { data: products } = await client.products.list({ category_slug: [slug] });

		return {
			props: {
				category,
				products
			}
		};
	}
</script>

<script>
	import Navbar from '$lib/components/Navbar.svelte';

	export let category;
	export let products;
</script>

<Navbar />
<div class="container">
	<div class="row">
		<h1>{category.name}</h1>

		<ul class="list-unstyled">
			{#each products as product}
				<li class="py-1">
					<a rel="prefetch" href="/products/{product.permalink}">{product.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
