<script lang="ts">
  import { onMount } from "svelte";

  import GtoolsWarehouse from "$lib/Gcore/Gtools/GtoolsMagazzino/GtoolsMagazzino.svelte";
  import GuiToolsMagazzinoNavbar from "$lib/Gcore/Gtools/GtoolsMagazzino/GuiToolsMagazzino/GuiToolsMagazzinoNavbar/GuiToolsMagazzinoNavbar.svelte";
  import GuiTitle from "$lib/GuiComponents/GuiTitle/GuiTitle.svelte";
  
  let GtoolsPageContainer: HTMLElement;
  
  onMount(() => {
    GtoolsPageContainer!.parentElement!.style.padding = "0px";
  });
</script>

<div class="flex flex-col h-screen transition" bind:this={GtoolsPageContainer}>
  <div class="overflow-auto p-4">
    <GuiTitle Gtitle="tools" />
    <GtoolsWarehouse />
  </div>

  <GuiToolsMagazzinoNavbar />
</div>
