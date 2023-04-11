<script lang="ts">
  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";
  import { goto } from "$app/navigation";

  export let GisPopupOpen: boolean;

  function handleClick() {
    GisPopupOpen = true;
    goto("/devDemo/Gtools/addTool");
  }
</script>

<GuiButton on:click={handleClick} Gcolor="green-500">add</GuiButton>
