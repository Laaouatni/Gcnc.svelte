<!-- 
  @component
  ## notes:
  - the `alt` attribute is set to the value of the src attribute converted to title case
-->
<script lang="ts">
  import convertCaseFromSrc from "$Gassets/scripts/convertCaseFromSrc/convertCaseFromSrc";

  export let Gsrc: string;

  $: Galt = convertCaseFromSrc(Gsrc);
</script>

<img src={Gsrc} alt={Galt} />
