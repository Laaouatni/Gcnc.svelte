<script lang="ts">
  import GuiGridColResponsiveContainer from "$Gui/GuiGridColResponsiveContainer/GuiGridColResponsiveContainer.svelte";
  import GtoolsStore from "$Gdatabase/Gtools/GtoolsStore";
  import Gtool from "../Gtool/Gtool.svelte";
</script>

<GuiGridColResponsiveContainer>
  {#each $GtoolsStore as tool (tool.id)}
    <Gtool toolObjData={tool} />
  {/each}
</GuiGridColResponsiveContainer>
