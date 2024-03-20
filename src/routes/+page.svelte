<script lang="ts">
	import { onDestroy } from "svelte";
	import { writable } from "svelte/store";

	// Create writable stores for date and time
	const date = writable<string>("");
	const time = writable<string>("");
	const timeZone = writable<any>("");

	// Update date and time every second
	const interval = setInterval(updateDateTime, 1000);

	// Update date and time functions
	function updateDateTime() {
		const now = new Date();

		date.set(now.toDateString());
		time.set(now.toLocaleTimeString());
		// timeZone.set(Intl.DateTimeFormat("en-GB", { timeZone: "short" }));
	}

	// Cleanup interval on component destruction
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:head>
	<title>ZAVANT Agency</title>
</svelte:head>

<div class="transition-400 flex flex-col h-full select-none p-20 text-primary">
	<!-- Top -->
	<div class="flex-s-between items-start">
		<!-- Top Right -->
		<p class="w-20% max-w-450px">
			We are a remote design and development agency designing creative experiences for conversion
			and retention on the web.
		</p>

		<!-- Top Left -->
		<div class="flex flex-col gap-2.5 items-end text-right">
			<div class="w-150px">{$time} {$timeZone}</div>

			<div class="p-(x-2.5 y-.5) rounded-full b b-primary flex-s-center items-center gap-1 w-fit">
				<span> Active </span>
				<div class="text-xl fw-bold">•</div>
			</div>

			<div>{$date}</div>
		</div>
	</div>

	<!-- Middle -->
	<div class="m-a">
		<img
			class=" text-primary rounded bg-primary h-50 w-50 p-2.5 transition-400 hover:(op-90 scale-102.5)"
			src="src/lib/assets/images/zavant-logo.svg"
			alt="Zavant's Logo"
		/>
	</div>

	<!-- Bottom -->
	<div class="mt-a flex-s-between items-start">
		<!-- Social Media -->
		<div></div>

		<!-- Email -->
		<div>
			<a href="mailto:zavant.design@gmail.com">zavant.design@gmail.com</a>
		</div>
	</div>
</div>

<div class="p-2 bg-primary text-[hsl(0,0%,2%)] absolute bottom-0 right-0 left-0 text-center">
	Contact us through our social media channels, we will love to hear from you
</div>
