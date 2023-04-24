<script lang="ts">
  import {
    default as retrievePageDataFromImportMetaGlob,
    type TypeImportMetaGlobObj,
  } from "$Gassets/scripts/retrievePageDataFromImportMetaGlob/retrievePageDataFromImportMetaGlob";

  export let GimportMetaGlobObj: TypeImportMetaGlobObj;

  import GuiRouteLink from "$Gui/GuiRouteLink/GuiRouteLink.svelte";

  const pagesData = retrievePageDataFromImportMetaGlob(GimportMetaGlobObj);
</script>

<!-- !todo: use https://floating-ui.com/docs/tutorial instead DELETE EVERYTHING HERE and correct things -->
<nav class="grid grid-flow-col gap-4 border p-4">
  {#each pagesData as thisPageData}
    <GuiRouteLink
      class="border grid place-items-center peer p-4 min-w-[4rem] min-h-[4rem] rounded-lg shadow-md text-2xl"
      Ghref={thisPageData.path}
    >
      {thisPageData.name?.charAt(0)}
    </GuiRouteLink>
  {/each}
</nav>
