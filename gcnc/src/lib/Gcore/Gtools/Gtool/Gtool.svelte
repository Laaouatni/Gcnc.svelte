<script lang="ts">
  import GuiCard from "$Gui/GuiCard/GuiCard.svelte";
  import type TypeGtool from "$Gdatabase/Gtools/types/TypeGtool";
  import GtoolKey from "./GtoolKey/GtoolKey.svelte";
  import GtoolValue from "./GtoolValue/GtoolValue.svelte";

  import GtoolsStore from "$Gdatabase/Gtools/stores/StoreGtools";
  import GtoolEditCheckbox from "./GtoolEdit/GtoolEditCheckbox/GtoolEditCheckbox.svelte";

  export let toolObjData: TypeGtool;
  export let isGtoolActive: boolean = false;

  $: isGtoolActive = toolObjData.isActived;

  function toogleGtoolActive() {
    GtoolsStore.update((tools) => {
      return tools.map((tool) => {
        if (tool.id === toolObjData.id) {
          tool.isActived = !tool.isActived;
        } else {
          tool.isActived = false;
        }
        return tool;
      });
    });
  }
</script>

<GuiCard on:click={toogleGtoolActive} isActive={isGtoolActive}>
  {#if toolObjData.id}
    <GtoolEditCheckbox GtoolId={toolObjData.id} />
  {/if}
  {#each Object.entries(toolObjData) as [key, value]}
    <div class="grid grid-cols-2">
      <GtoolKey GtoolKey={key} />
      <GtoolValue GtoolValue={value} />
    </div>
  {/each}
</GuiCard>
