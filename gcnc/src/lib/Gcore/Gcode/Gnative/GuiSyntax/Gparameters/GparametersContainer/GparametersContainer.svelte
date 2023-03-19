<script lang="ts">
  import Gparameter from "../Gparameter/Gparameter.svelte";

  export let GpositionsObject: {x: number, y: number, z: number};
</script>

<div class="flex gap-2">
  {#each Object.entries(GpositionsObject) as thisPosition}
    <Gparameter Gposition={thisPosition} />
  {/each}
</div>
