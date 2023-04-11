<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import {
    default as retrievePageDataFromImportMetaGlob,
    type ImportMetaGlobObjType,
  } from "$Gassets/scripts/retrievePageDataFromImportMetaGlob/retrievePageDataFromImportMetaGlob";

  export let GimportMetaGlobObj: ImportMetaGlobObjType;

  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";

  const pagesData = retrievePageDataFromImportMetaGlob(GimportMetaGlobObj, {
    thisPageRouteId: $page.route.id!,
  });
</script>

<nav class="flex flex-wrap gap-4">
  {#each pagesData as thisPageData}
    <GuiButton Gcolor="blue-400" on:click={() => goto(thisPageData.path)}>
      {thisPageData.name}
    </GuiButton>
  {/each}
</nav>
