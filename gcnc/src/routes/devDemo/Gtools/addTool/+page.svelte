<script lang="ts">
  import GuiPopup from "$Gui/GuiPopup/GuiPopup.svelte";
  import { goto } from "$app/navigation";

  import GtoolsPopupIsOpen from "$database/Gtools/GtoolsPopupStore";

  function handlePopupClosed() {
    console.log("handlePopupClosed");
    goto("/devDemo/Gtools/");
  }
</script>

<GuiPopup bind:GisPopupOpen={$GtoolsPopupIsOpen} GonPopupClosed={handlePopupClosed} />
