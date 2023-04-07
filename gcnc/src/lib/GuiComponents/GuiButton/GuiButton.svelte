<script lang="ts">
  import { scale } from "svelte/transition";
  import twColors from "tailwindcss/colors";

  export let Gcolor: string;

  let hexColor: string = "";

  $: {
    const [key, value] = Gcolor.split("-");

    // @ts-ignore
    hexColor = value ? twColors[key][value] : twColors[key];
  }
</script>

<style>
  button {
    --tw-shadow-color: var(--hex-color);
    background-color: var(--hex-color);
  }
</style>

<button
  on:click
  style="--hex-color: {hexColor};"
  class="flex-1 shadow-lg shadow-inherit rounded-lg p-4 text-white font-semibold uppercase transition active:scale-[0.99] relative
  before:w-full before:h-full before:absolute before:top-0 before:left-0 hover:before:bg-black/10 overflow-hidden"
  transition:scale
>
  <slot />
</button>