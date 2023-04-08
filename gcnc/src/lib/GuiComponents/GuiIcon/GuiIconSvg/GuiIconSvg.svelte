<script lang="ts">
  export let Gsrc: string;

  $: svgRoute = `${Gsrc}?raw`;

  function fetchSvg(svgRoute: string) {
    return new Promise((resolve) => {
      fetch(svgRoute)
        .then((response) => response.text())
        .then((svg) => resolve(svg));
    });
  }
</script>

{#await fetchSvg(svgRoute)}
  <div>loading...</div>
{:then value}
  {@html value}
{/await}
