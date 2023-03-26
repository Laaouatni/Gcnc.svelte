<script lang="ts">
  import GtoolsWarehouse from "$lib/Gcore/Gtools/GtoolsWarehouse/GtoolsWarehouse.svelte";
  import GuiTitle from "$lib/GuiComponents/GuiTitle/GuiTitle.svelte";
  import { onMount } from "svelte";

  let GtoolsPageContainer: HTMLElement;
  
  onMount(() => {
    GtoolsPageContainer.parentElement.style.padding = 0;
  })
</script>

<div class="flex flex-col h-full" bind:this={GtoolsPageContainer}>
  <div class="overflow-auto p-4">
    <GuiTitle Gtitle="tools" />
    <GtoolsWarehouse />
  </div>
  
  <div
    class="flex bg-white w-full p-4"
  >
    <button
      class="flex-1 bg-red-500 shadow-lg shadow-red-500 rounded-lg p-4 text-white font-semibold uppercase"
      >delete</button
    >
  </div>
</div>

