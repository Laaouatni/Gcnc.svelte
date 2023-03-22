<script lang="ts">
  import GuiGridColResponsiveContainer from "$lib/GuiComponents/GuiGridColResponsiveContainer/GuiGridColResponsiveContainer.svelte";
  import GuiTitle from "$lib/GuiComponents/GuiTitle/GuiTitle.svelte";
  import GtoolsStore from "../../../../database/Gtools/GtoolsStore";
  import Gtool from "../Gtool/Gtool.svelte";
  import GtoolsTestingAndDeveplomentData from "./GtoolsTestingAndDeveplomentData";

  $GtoolsStore = GtoolsTestingAndDeveplomentData;
</script>

<GuiTitle>my tools:</GuiTitle>

<GuiGridColResponsiveContainer>
  {#each $GtoolsStore as tool}
    <Gtool toolObjData={tool} />
  {/each}
</GuiGridColResponsiveContainer>
