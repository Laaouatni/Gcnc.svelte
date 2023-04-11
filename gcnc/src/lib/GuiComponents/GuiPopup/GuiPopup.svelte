<script lang="ts">
  import GuiPopupDialog from "./GuiPopupDialog/GuiPopupDialog.svelte";
  
  import { fade } from "svelte/transition";
  import { browser } from "$app/environment";

  export let GisPopupOpen: boolean;
  export let GonPopupClosed: () => void = () => {};

  $: if(!GisPopupOpen && browser) GonPopupClosed();

  function handleClose() {
    GisPopupOpen = false;
  }

  function handleClick() {
    handleClose();
  }

  function handleKeyUp(e: KeyboardEvent) {
    if(!GisPopupOpen) return;
    if (e.key === "Escape") handleClose();
  }
</script>

<svelte:body on:keyup={handleKeyUp} />

{#if GisPopupOpen}
  <div
    transition:fade|local
    class="absolute w-full h-screen overflow-auto outline grid place-items-center backdrop-blur-sm bg-black/60 p-4"
    on:click|self={handleClick}
  >
    <GuiPopupDialog bind:GisPopupOpen>
      <slot></slot>
    </GuiPopupDialog>
  </div>
{/if}
