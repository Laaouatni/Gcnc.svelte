<script lang="ts">
  import GiconX from "$assets/icons/svg/GiconX.svg";
  import GuiIcon from "$Gui/GuiIcon/GuiIcon.svelte";
  import GuiTooltipTwPeer from "$Gui/GuiTooltipTwPeer/GuiTooltipTwPeer.svelte";

  import { handleClose } from "$Gui/GuiPopup/GuiPopup.svelte";

  function handleClick() {
    handleClose();
  }
</script>

<button
  on:click={handleClick}
  class="peer border rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white shadow-lg opacity-95 active:scale-95 transition"
>
  <span class="sr-only">Close Popup</span>
  <GuiIcon Gsrc={GiconX} />
</button>

<GuiTooltipTwPeer>Close Popup</GuiTooltipTwPeer>
