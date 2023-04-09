<script lang="ts">
  import GuiPopup from "$src/lib/GuiComponents/GuiPopup/GuiPopup.svelte";
  import GtoolEditPopupSteps from "$src/lib/Gcore/Gtools/Gtool/GtoolEdit/GtoolEditPopup/GtoolEditPopupSteps.svelte";

  import Page from "../+page.svelte";

  import { handleOpen } from "$Gui/GuiPopup/GuiPopup.svelte";

  handleOpen();
</script>

<Page>
  <GuiPopup>
    <GtoolEditPopupSteps />
  </GuiPopup>
</Page>
