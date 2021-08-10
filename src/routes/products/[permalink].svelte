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
	import Navbar from '$lib/components/Navbar.svelte';

	export let product;
	console.log(product);
</script>

<Navbar />
<div class="container py-4">
	<div class="row">
		<div class="col-md">
			<div class="row justify-content-center">
				<div class="col-sm p-0 text-center">
					<img src={product.media.source} alt="" />
				</div>
				<div class="col-sm">
					<h1>{product.name}</h1>
					<p>{product.price.formatted_with_symbol}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		height: 50%;
		width: auto;
	}
</style>
