<script lang="ts">
  import GtoolsWarehouse from "$lib/Gcore/Gtools/GtoolsWarehouse/GtoolsWarehouse.svelte";
</script>

<GtoolsWarehouse />






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
