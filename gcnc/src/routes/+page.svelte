<script lang="ts">
  import GuiTitle from "$Gui/GuiTitle/GuiTitle.svelte";

  import GuiCard from "$Gui/GuiCard/GuiCard.svelte";
  import retrievePageDataFromImportMetaGlob from "$Gassets/scripts/retrievePageDataFromImportMetaGlob/retrievePageDataFromImportMetaGlob";

  const pages = import.meta.glob("./devDemo/*/+page.svelte");
  const pageLinks = retrievePageDataFromImportMetaGlob(pages);
</script>

<div class="flex h-screen flex-col p-4">
  <GuiTitle Gtitle="Home" />

  <ul class="grid h-full gap-4 text-xl">
    {#each pageLinks as { path, name }}
      <GuiCard isActive={false}>
        <a class="grid place-items-center text-3xl" href={path}>{name}</a>
      </GuiCard>
    {/each}
  </ul>
</div>

<!-- <script lang="ts">
  import G1 from "$lib/Gcore/Gcode/Gnative/Gfunctionalities/Gmove/G1moveSlow/G1moveSlow.svelte";
  // import G0 from "$lib/Gcore/Gcode/Gnative/Gfunctionalities/Gmove/G0moveFast/G0moveFast.svelte";

  function createMultipleG(n: number) {
    let g = [];
    for (let i = 0; i < n; i++) {
      g.push({
        x:10*i, 
        y:20*i, 
        z:30*i
      });
    }
    return g;
  }
</script>

<main class="p-4 grid gap-2">
    {#each createMultipleG(10) as thisG1obj}
      <G1 positionXYZ={thisG1obj} />
      <- - <G0 positionXYZ={thisG1obj} /> - ->
    {/each}
</main> -->
