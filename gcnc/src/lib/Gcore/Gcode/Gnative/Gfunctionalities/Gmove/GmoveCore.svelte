<script lang="ts">
  import GuiCard from "$lib/GuiComponents/GuiCard/GuiCard.svelte";
  import GparametersContainer from "../../GuiSyntax/Gparameters/GparametersContainer/GparametersContainer.svelte";

  export let positionXYZ: {x: number, y: number, z: number};
</script>

<GuiCard>
  <div class="flex gap-3">
    <slot name="prefix"></slot>
    <GparametersContainer GpositionsObject={positionXYZ} />
  </div>
</GuiCard>

