<script lang="ts">
  import GuiPopupDialog from "./GuiPopupDialog/GuiPopupDialog.svelte";
  
  import { fade } from "svelte/transition";

  export let GisPopupOpen: boolean;
</script>

{#if GisPopupOpen}
  <div
    transition:fade
    class="absolute w-full h-screen overflow-auto outline grid place-items-center backdrop-blur-sm bg-black/50 p-4"
  >
    <GuiPopupDialog bind:GisPopupOpen></GuiPopupDialog>
  </div>
{/if}
