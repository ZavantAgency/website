<script lang="ts">
	import { onDestroy } from "svelte";
	import { writable } from "svelte/store";

	import { socials, mail, aboutUs, status, marquee } from "~/lib/assets/store/about";

	import logo from "images/zavant-logo.svg";

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
	class="transition-400 flex flex-col h-full select-none p-10 md-p-20 pb-0! text-primary font-primary"
>
	<!-- Top -->
	<div class="flex-s-between flex-col-reverse sm-flex-row gap-10 items-start">
		<!-- Top Right -->
		<h1 class="md-w-40% max-w-400px">
			{aboutUs}
		</h1>

		<!-- Top Left -->
		<div class="flex flex-col gap-2.5 sm-(items-end text-right)">
			<div class="w-150px">{$time}</div>

			<div class="p-(x-2.5 y-.5) rounded-full b b-primary flex-s-center items-center gap-1 w-fit">
				<span> {status ? "Active" : "Inactive"} </span>
				<div class="text-xl fw-bold animate-pulse">•</div>
			</div>

			<div>{$date}</div>
		</div>
	</div>

	<!-- Middle -->
	<div class="m-a">
		<img
			class=" text-primary rounded bg-primary h-50 w-50 p-2.5 transition-400 op-85 hover:(op-100 scale-102.5)"
			src={logo}
			alt="Zavant's Logo"
		/>
	</div>

	<!-- Bottom -->
	<div
		class={"mt-a flex-s-between items-start pb"}
		style={`margin-bottom:${bottomBlockHeight + 10}px`}
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
	class="p-2 bg-primary text-[hsl(0,0%,2%)] absolute bottom-0 right-0 left-0 text-center flex-s-center flex-row gap-2.5"
	bind:clientHeight={bottomBlockHeight}
>
	{#each marquee as _}
		• {_} •
	{/each}
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
