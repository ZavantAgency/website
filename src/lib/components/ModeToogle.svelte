<script lang="ts">
	import { resetMode, toggleMode } from "mode-watcher";
</script>

<button on:click={toggleMode}> toggle </button>

<button on:click={() => resetMode()}>System</button>
