<script lang="ts">
  import convertCaseFromSrc from "./convertCaseFromSrc";
  
  export let Gsrc: string;

  $: Galt = convertCaseFromSrc(Gsrc);
</script>

<img src={Gsrc} alt={Galt} />
