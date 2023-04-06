<script lang="ts">
  import GuiIconSvg from "./GuiIconSvg/GuiIconSvg.svelte";

  export let Gsrc: string;

  $: isSvg = !!Gsrc.endsWith(".svg");
</script>

{#if isSvg}
  <GuiIconSvg {Gsrc} />
{:else}
  <img src={Gsrc} />
{/if}
