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

<!-- category section  -->
<section aria-labelledby="category-heading" class="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
	<div class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
		<h2 id="category-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">
			Shop by Category
		</h2>
	</div>

	<div class="mt-4 flow-root">
		<div class="-my-2">
			<div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
				<div
					class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8"
				>
					{#each categories as category}
						<a
							rel="prefetch"
							href="/categories/{category.slug}"
							class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
						>
							<span
								aria-hidden="true"
								class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
							/>
							<span class="relative mt-auto text-center text-xl font-bold text-white"
								>{category.name}</span
							>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- products section  -->
<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{#each products as product}
				<div class="group relative">
					<div
						class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
					>
						<img
							src={product.media.source}
							alt={product.name}
							class="w-full h-full object-center object-cover lg:w-full lg:h-full"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-sm text-gray-700">
								<a rel="prefetch" href="/products/{product.permalink}">
									<span aria-hidden="true" class="absolute inset-0" />
									{product.name}
								</a>
							</h3>
						</div>
						<p class="text-sm font-medium text-gray-900">${product.price.formatted}</p>
					</div>
				</div>
			{/each}

			<!-- More products... -->
		</div>
	</div>
</div>

<style>
	a:hover {
		color: rebeccapurple;
		text-decoration: underline;
	}
</style>
