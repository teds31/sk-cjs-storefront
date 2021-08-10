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
	export let category;
	export let products;
</script>

<a href="/" class="text-xl px-6 py-4">Back Home</a>
<div class="container mx-auto my-4">
	<div class="flex">
		<div class="flex-col">
			<h1 class="text-3xl border-b mb-4">{category.name}</h1>

			<ul class="">
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
