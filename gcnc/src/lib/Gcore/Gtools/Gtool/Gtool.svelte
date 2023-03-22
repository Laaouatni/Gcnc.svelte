<script lang="ts">
  import GuiCard from "$lib/GuiComponents/GuiCard/GuiCard.svelte";
  import type GtoolInterface from "../../../../database/Gtools/GtsInterface/GtoolInterface";
  import GtoolKey from "./GtoolKey/GtoolKey.svelte";
  import GtoolValue from "./GtoolValue/GtoolValue.svelte";

  export let toolObjData: GtoolInterface;
</script>

<GuiCard>
  {#each Object.entries(toolObjData) as [key, value]}
    <div class="grid grid-cols-2">
      <GtoolKey GtoolKey={key} />
      <GtoolValue GtoolValue={value} />
    </div>
  {/each}
</GuiCard>
