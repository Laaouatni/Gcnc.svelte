<script context="module" lang="ts">
  let GisPopupOpen: boolean = false;

  export function handleClose() {
    GisPopupOpen = false;
    console.log("handleClose", GisPopupOpen)
  }

  export function handleOpen() {
    GisPopupOpen = true;
    console.log("handleOpen", GisPopupOpen)
  }
</script>

<script lang="ts">
  import GuiPopupDialog from "./GuiPopupDialog/GuiPopupDialog.svelte";
  import { fade } from "svelte/transition";

  function handleClick() {
    handleClose();
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (!GisPopupOpen) return;
    if (e.key === "Escape") handleClose();
  }
</script>

<svelte:body on:keyup={handleKeyUp} />

{#if GisPopupOpen}
  <div
    transition:fade
    class="absolute w-full h-screen overflow-auto outline grid place-items-center backdrop-blur-sm bg-black/50 p-4"
    on:click|self={handleClick}
  >
    <GuiPopupDialog>
      <slot />
    </GuiPopupDialog>
  </div>
{/if}
