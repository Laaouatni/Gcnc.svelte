<script lang="ts">
  export let Gsrc: string;

  $: svgRoute = `${Gsrc}?raw`;
</script>

{#await import(svgRoute)}
  <div>loading...</div>
{:then value}
  {@html value.default}
{/await}
