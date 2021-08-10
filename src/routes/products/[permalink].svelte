<script context="module">
	import { client } from '$lib/commerce.js';

	export async function load({ page }) {
		const { permalink } = page?.params;

		const product = await client.products.retrieve(permalink, {
			type: 'permalink'
		});

		return {
			props: {
				product
			}
		};
	}
</script>

<script>
	export let product;
</script>

<a href="/" class="text-xl px-6 my-4">Back Home</a>

<div class="container mx-auto py-4">
	<div class="flex">
		<div class="flex-col p-8">
			<img src={product.media.source} alt="" />
		</div>
		<div class="flex-col p-8">
			<h1 class="text-3xl mb-4">{product.name}</h1>
			<p class="font-bold">{product.price.formatted_with_symbol}</p>
		</div>
	</div>
</div>

<style>
	img {
		height: 20rem;
		width: auto;
		object-fit: fill;
	}
	a:hover {
		color: rebeccapurple;
		text-decoration: underline;
	}
</style>
