<script lang="ts">
  import Gtool from "../Gtool.svelte";

  export let GtoolValue: string;
</script>

{#if typeof GtoolValue == "object"}
  <Gtool toolObjData={GtoolValue} />
{:else}
  <p>{GtoolValue}</p>
{/if}
