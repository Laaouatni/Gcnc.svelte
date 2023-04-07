<script lang="ts">
  import { onMount } from "svelte";

  import GtoolsWarehouse from "$lib/Gcore/Gtools/GtoolsMagazzino/GtoolsMagazzino.svelte";
  import GuiToolsMagazzinoNavbar from "$lib/Gcore/Gtools/GtoolsMagazzino/GuiToolsMagazzino/GuiToolsMagazzinoNavbar/GuiToolsMagazzinoNavbar.svelte";
  import GuiTitle from "$Gui/GuiTitle/GuiTitle.svelte";
  import GuiPopup from "$src/lib/GuiComponents/GuiPopup/GuiPopup.svelte";
  
  let GtoolsPageContainer: HTMLElement;

  let GisPopupOpen = false;
  
  onMount(() => {
    GtoolsPageContainer!.parentElement!.style.padding = "0px";
  });
</script>

<div class="flex flex-col h-screen transition" bind:this={GtoolsPageContainer}>
  <div class="overflow-auto p-4">
    <GuiTitle Gtitle="tools" />
    <GtoolsWarehouse />
  </div>

  <GuiToolsMagazzinoNavbar bind:GisPopupOpen />

  <GuiPopup bind:GisPopupOpen />
</div>
