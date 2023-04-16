<script lang="ts">
  import {
    default as retrievePageDataFromImportMetaGlob,
    type TypeImportMetaGlobObj,
  } from "$Gassets/scripts/retrievePageDataFromImportMetaGlob/retrievePageDataFromImportMetaGlob";

  export let GimportMetaGlobObj: TypeImportMetaGlobObj;

  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";
  import GuiTooltipTwPeer from "$Gui/GuiTooltipTwPeer/GuiTooltipTwPeer.svelte";

  const pagesData = retrievePageDataFromImportMetaGlob(GimportMetaGlobObj);
</script>

<!-- !todo: use https://floating-ui.com/docs/tutorial instead DELETE EVERYTHING HERE and correct things -->
<nav class="grid grid-flow-col gap-4 border p-4">
  {#each pagesData as thisPageData}
    <!-- <div class="relative"> -->
    <a
      class="border grid place-items-center peer p-4 min-w-[4rem] min-h-[4rem] rounded-lg shadow-md text-2xl"
      href={thisPageData.path}
    >
      {thisPageData.name?.charAt(0)}
    </a>
    <!-- <div class="absolute top-0 left-0">
        <GuiTooltipTwPeer>
          {thisPageData.name}
        </GuiTooltipTwPeer>
      </div>
    </div> -->
  {/each}
</nav>
