<script lang="ts">
  import GuiIconImg from "./GuiIconImg/GuiIconImg.svelte";
  import GuiIconSvg from "./GuiIconSvg/GuiIconSvg.svelte";

  export let Gsrc: string;

  $: isSvg = !!Gsrc.endsWith(".svg");
</script>

{#if isSvg}
  <GuiIconSvg {Gsrc} />
{:else}
  <GuiIconImg {Gsrc} />
{/if}
