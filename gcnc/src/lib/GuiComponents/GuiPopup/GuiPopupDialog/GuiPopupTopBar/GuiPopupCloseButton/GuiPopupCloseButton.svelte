<script lang="ts">
  import GiconX from "$assets/icons/svg/GiconX.svg";
  import GuiIcon from "$Gui/GuiIcon/GuiIcon.svelte";
  import GuiTooltipTwPeer from "$src/lib/GuiComponents/GuiTooltipTwPeer/GuiTooltipTwPeer.svelte";

  export let GisPopupOpen: boolean;

  function handleClick() {
    GisPopupOpen = false;
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
