<script lang="ts">
  import GuiCard from "$lib/GuiComponents/GuiCard/GuiCard.svelte";
  import type GtoolInterface from "../../../../database/Gtools/GtsInterface/GtoolInterface";
  import GtoolKey from "./GtoolKey/GtoolKey.svelte";
  import GtoolValue from "./GtoolValue/GtoolValue.svelte";

  import GtoolsStore from "../../../../database/Gtools/GtoolsStore";

  export let toolObjData: GtoolInterface;
  export let isGtoolActive: boolean = false;

  $: isGtoolActive = toolObjData.isActived;

  function toogleGtoolActive() {
    $GtoolsStore = $GtoolsStore.map((tool) => {
      if (tool.id === toolObjData.id) {
        tool.isActived = !tool.isActived;
      } else {
        tool.isActived = false;
      }
      return tool;
    });
  }
</script>

<GuiCard on:click={toogleGtoolActive} isActive={isGtoolActive}>
  {#each Object.entries(toolObjData) as [key, value]}
    <div class="grid grid-cols-2">
      <GtoolKey GtoolKey={key} />
      <GtoolValue GtoolValue={value} />
    </div>
  {/each}
</GuiCard>
