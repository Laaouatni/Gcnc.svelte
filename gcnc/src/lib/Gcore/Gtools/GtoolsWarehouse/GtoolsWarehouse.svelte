<script lang="ts">
  import GuiCard from "$lib/GuiComponents/GuiCard/GuiCard.svelte";
  import GuiTitle from "$lib/GuiComponents/GuiTitle/GuiTitle.svelte";
  import GtoolsStore from "../../../../database/Gtools/GtoolsStore";
  import Gtool from "../Gtool/Gtool.svelte";
  import GtoolsTestingAndDeveplomentData from "./GtoolsTestingAndDeveplomentData";

  $GtoolsStore = GtoolsTestingAndDeveplomentData;
</script>

<GuiCard>
  <GuiTitle>my tools:</GuiTitle>
  {#each $GtoolsStore as tool}
    <Gtool toolObjData={tool} />
  {/each}
</GuiCard>
