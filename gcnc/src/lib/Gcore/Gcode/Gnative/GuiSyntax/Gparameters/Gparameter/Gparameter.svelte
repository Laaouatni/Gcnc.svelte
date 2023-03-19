<script lang="ts">
  import GparameterKey from "./GparameterKey/GparameterKey.svelte";
  import GparameterValue from "./GparameterValue/GparameterValue.svelte";

  export let Gposition: [string, number];
</script>

<div class="flex">
  <GparameterKey Gkey={Gposition[0]} />
  <GparameterValue Gvalue={Gposition[1]} />
</div>