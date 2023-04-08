<!-- 
  @component
  ## notes:
  - the `alt` attribute is set to the value of the src attribute converted to title case
-->
<script lang="ts">
  import convertCase from "./convertCase";

  export let Gsrc: string;

  $: Galt = convertCase(Gsrc);
</script>

<img src={Gsrc} alt={Galt} />
