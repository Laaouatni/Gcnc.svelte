<script lang="ts">
  import Gprefix from "../../../GuiSyntax/Gprefix/Gprefix.svelte";
  import GmoveCore from "../GmoveCore.svelte";

  export let positionXYZ: { x: number; y: number; z: number };

  const PREFIX = "G1";
</script>

<GmoveCore {positionXYZ}>
  <svelte:fragment slot="prefix">
    <Gprefix Gprefix={PREFIX} />
  </svelte:fragment>
</GmoveCore>
