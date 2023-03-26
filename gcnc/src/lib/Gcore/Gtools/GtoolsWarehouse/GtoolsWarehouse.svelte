<script lang="ts">
  import GuiGridColResponsiveContainer from "$lib/GuiComponents/GuiGridColResponsiveContainer/GuiGridColResponsiveContainer.svelte";
  import GtoolsStore from "../../../../database/Gtools/GtoolsStore";
  import Gtool from "../Gtool/Gtool.svelte";
  import GtoolsTestingAndDeveplomentData from "./GtoolsTestingAndDeveplomentData";

  GtoolsStore.set(GtoolsTestingAndDeveplomentData);
</script>

<GuiGridColResponsiveContainer>
  {#each $GtoolsStore as tool}
    <Gtool toolObjData={tool} />
  {/each}
</GuiGridColResponsiveContainer>
