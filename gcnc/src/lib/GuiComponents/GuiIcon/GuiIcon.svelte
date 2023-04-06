<script lang="ts">
  export let Gsrc: string;

  $: isSvg = !!Gsrc.endsWith(".svg");
  $: svgRoute = Gsrc.replace(".svg", ".svg?raw"); // we use replace instead `${}` because it given me some bugs
</script>

{#if isSvg}
  {#await import(svgRoute)}
    <div>loading...</div>
  {:then value}
    {@html value.default}
  {/await}
{:else}
  <img src={Gsrc} />
{/if}
