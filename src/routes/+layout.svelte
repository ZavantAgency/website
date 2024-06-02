<script lang="ts">
	import "@unocss/reset/tailwind.css";
	import { ModeWatcher } from "mode-watcher";
	import "uno.css";
</script>

<div class="h-full w-full bg-primary dark:bg-[hsl(0,0%,2%)]">
	<slot />
</div>

<ModeWatcher />
