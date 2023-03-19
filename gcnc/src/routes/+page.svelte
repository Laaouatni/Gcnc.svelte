<script lang="ts">
  import G1 from "$lib/Gcore/Gcode/Gnative/Gfunctionalities/G1/G1.svelte";

  function createMultipleG1(n: number) {
    let g1s = [];
    for (let i = 0; i < n; i++) {
      g1s.push({x:10*i, y:20*i, z:30*i});
    }
    return g1s;
  }
</script>

<main class="p-4 grid gap-2">
    {#each createMultipleG1(10) as thisG1obj}
      <G1 positionXYZ={thisG1obj} />
    {/each}
</main>