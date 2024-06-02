<script lang="ts">
	import Marquee from "svelte-fast-marquee";
	import { onDestroy } from "svelte";
	import { writable } from "svelte/store";

	import ModeToogle from "~/lib/components/ModeToogle.svelte";
	import { socials, mail, aboutUs, active, marqueeContent } from "~/lib/assets/store/about";

	// Create writable stores for date and time
	const date = writable<string>("");
	const time = writable<string>("");

	// Update date and time every second
	const interval = setInterval(updateDateTime, 1000);

	// Update date and time functions
	function updateDateTime() {
		const now = new Date();

		date.set(now.toDateString());
		time.set(now.toLocaleTimeString("default", { timeZoneName: "short" }));
	}

	// Cleanup interval on component destruction
	onDestroy(() => {
		clearInterval(interval);
	});

	// The height of the bottom block
	let bottomBlockHeight: number;
</script>

<svelte:head>
	<title>Zavant Agency</title>
	<meta name="theme-color" content="#050505" />
</svelte:head>

<div
	class="transition-400 flex flex-col h-full select-none p-6 pb-0! dark:text-primary font-primary"
>
	<!-- Top -->
	<div class="flex-s-between flex-col-reverse sm-flex-row gap-5 items-start">
		<!-- Top Right -->
		<div class="md-w-40% max-w-400px space-y-2">
			<h1>
				{aboutUs}
			</h1>

			<ModeToogle />
		</div>

		<!-- Top Left -->
		<div class="flex flex-col gap-2.5 sm-(items-end text-right)">
			<div>{$time}</div>

			<div
				class="p-(x-2.5 y-.5) rounded-full b b-[hsl(0,0%,2%)] dark-b-primary flex-s-center items-center gap-1 w-fit"
			>
				<span> {active ? "Active" : "Inactive"} </span>
				<div class="text-xl fw-bold animate-pulse">•</div>
			</div>

			<div>{$date}</div>
		</div>
	</div>

	<!-- Middle -->
	<div class="m-a">
		<div
			class="i-zavant-logo h-50 w-50 fill-primary transition-400 op-85 hover:(op-100 scale-102.5)"
		></div>
	</div>

	<!-- Bottom -->
	<div
		class={"mt-a flex-s-between gap-4 items-start flex-wrap"}
		style={`margin-bottom:${bottomBlockHeight + 8}px`}
	>
		<!-- Social Media -->
		<ul class="flex flex-row gap-4">
			{#each socials as { link, icon, name }}
				<li>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						class="grid place-content-center text-2xl hover-translate"
					>
						<div class={icon + ""} />
					</a>
				</li>
			{/each}
		</ul>

		<!-- Email -->
		<div class="transition-400 hover-translate">
			<a href={`mailto:${mail}`}>{mail}</a>
		</div>
	</div>
</div>

<div
	class="p-2 text-primary bg-[hsl(0,0%,2%)] dark-(bg-primary text-[hsl(0,0%,2%)]) absolute bottom-0 right-0 left-0"
	bind:clientHeight={bottomBlockHeight}
>
	<Marquee pauseOnHover={true} gap="1rem">
		{#each marqueeContent as _}
			<span>
				•• {_} ••
			</span>
		{/each}
	</Marquee>
</div>

<!-- a Walk around for the icons not showing expect statically already on the page -->
<div class="hidden">
	<div class="i-bxl-instagram-alt"></div>
	<div class="i-mingcute-social-x-line"></div>
	<div class="i-bxl-facebook-circle"></div>
	<div class="i-bxl-linkedin-square"></div>
	<div class="i-ic-round-whatsapp"></div>
	<div class=""></div>
</div>

<style>
	.hover-translate {
		@apply transition-400 ease-in-out;
		&:hover {
			@apply translate-y--1;
		}
	}
</style>
