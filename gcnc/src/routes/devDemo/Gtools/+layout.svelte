<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import GtoolsWarehouse from "$lib/Gcore/Gtools/GtoolsMagazzino/GtoolsMagazzino.svelte";
  import GuiToolsMagazzinoNavbar from "$lib/Gcore/Gtools/GtoolsMagazzino/GuiToolsMagazzino/GuiToolsMagazzinoNavbar/GuiToolsMagazzinoNavbar.svelte";
  import GuiTitle from "$Gui/GuiTitle/GuiTitle.svelte";

  import GtoolsPopupIsOpen from "$Gdatabase/Gtools/GtoolsPopupStore";

  let GtoolsPageContainer: HTMLElement;

  onMount(() => {
    if (GtoolsPageContainer && GtoolsPageContainer.parentElement) {
      GtoolsPageContainer.parentElement.style.padding = "0px";
    }
  });

  onDestroy(() => {
    if (GtoolsPageContainer && GtoolsPageContainer.parentElement) {
      // @ts-ignore
      GtoolsPageContainer.parentElement.style.padding = null;
    }
  });
</script>

<div class="flex flex-col h-screen transition" bind:this={GtoolsPageContainer}>
  <div class="overflow-auto p-4">
    <GuiTitle Gtitle="tools" />
    <GtoolsWarehouse />
  </div>

  <GuiToolsMagazzinoNavbar bind:GisPopupOpen={$GtoolsPopupIsOpen} />

  <slot />
</div>
