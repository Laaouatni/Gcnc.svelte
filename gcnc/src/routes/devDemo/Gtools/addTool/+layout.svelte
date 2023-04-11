<script lang="ts">
  import { goto } from "$app/navigation";
  import GtoolsPopupIsOpen from "$Gdatabase/Gtools/GtoolsPopupStore";

  import GuiPopup from "$Gui/GuiPopup/GuiPopup.svelte";
  import GuiPagination from "$Gui/GuiPagination/GuiPagination.svelte";

  function handlePopupClosed() {
    goto("/devDemo/Gtools/");
  }
</script>

<GuiPopup
  bind:GisPopupOpen={$GtoolsPopupIsOpen}
  GonPopupClosed={handlePopupClosed}
>
  <slot />

  <GuiPagination
    GimportMetaGlobObj={import.meta.glob("./steps/*/+page.svelte")}
  />
</GuiPopup>
