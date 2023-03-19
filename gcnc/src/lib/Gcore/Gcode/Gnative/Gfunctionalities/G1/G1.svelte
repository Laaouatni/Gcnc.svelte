<script lang="ts">
  import GuiCard from "$lib/GuiComponents/GuiCard/GuiCard.svelte";
  import GparametersContainer from "../../GuiSyntax/Gparameters/GparametersContainer/GparametersContainer.svelte";
  import Gprefix from "../../GuiSyntax/Gprefix/Gprefix.svelte";

  export let positionXYZ: {x: number, y: number, z: number};

  const PREFIX = "G1";
</script>

<GuiCard>
  <div data-g={PREFIX} class="flex gap-3">
    <Gprefix Gprefix={PREFIX} />
    <GparametersContainer GpositionsObject={positionXYZ} />
  </div>
</GuiCard>

