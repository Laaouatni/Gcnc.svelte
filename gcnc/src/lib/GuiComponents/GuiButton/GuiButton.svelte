<script lang="ts">
  import GuiRouteLinkOrSlot from "$Gui/GuiRouteLink/GuiRouteLinkOrSlot/GuiRouteLinkOrSlot.svelte";
  import { scale } from "svelte/transition";
  import twColors from "tailwindcss/colors";

  export let Ghref: string | null = null;
  export let Gcolor: string;

  let hexColor: string = "";

  $: {
    const [key, value] = Gcolor.split("-");

    // @ts-ignore
    hexColor = value ? twColors[key][value] : twColors[key];
  }
</script>

<button
  on:click
  style="--hex-color: {hexColor};"
  class="w-full shadow-lg flex justify-center shadow-inherit rounded-lg font-semibold uppercase transition active:scale-[0.99] relative
  before:w-full before:h-full before:absolute before:top-0 before:left-0 hover:before:bg-black/10 before:pointer-events-none overflow-hidden
  {Gcolor === 'white' ? 'text-black border !shadow-lg' : 'text-white'}
  {Ghref ? '' : 'p-4'}"
  transition:scale
>
  <GuiRouteLinkOrSlot {Ghref}>
    <slot />
  </GuiRouteLinkOrSlot>
</button>

<style>
  button {
    --tw-shadow-color: var(--hex-color);
    background-color: var(--hex-color);
  }
</style>
