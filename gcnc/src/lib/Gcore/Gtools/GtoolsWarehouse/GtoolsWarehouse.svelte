<script lang="ts">
  import GuiCard from "$lib/GuiComponents/GuiCard/GuiCard.svelte";
  import GtoolsStore from "../../../../database/Gtools/GtoolsStore";
  import GtoolsTestingAndDeveplomentData from "./GtoolsTestingAndDeveplomentData";

  $GtoolsStore = GtoolsTestingAndDeveplomentData;
</script>

<div class="p-4">
  <GuiCard>
    <h1>Warehouse</h1>
    <p>Here you can find all the tools you have in your warehouse.</p>
  </GuiCard>
</div>
