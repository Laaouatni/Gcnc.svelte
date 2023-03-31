<script lang="ts">
  import GuiGridColResponsiveContainer from "$lib/GuiComponents/GuiGridColResponsiveContainer/GuiGridColResponsiveContainer.svelte";
  import GtoolsStore from "../../../../database/Gtools/GtoolsStore";
  import Gtool from "../Gtool/Gtool.svelte";
</script>

<GuiGridColResponsiveContainer>
  {#each $GtoolsStore as tool (tool.id)}
    <Gtool toolObjData={tool} />
  {/each}
</GuiGridColResponsiveContainer>
