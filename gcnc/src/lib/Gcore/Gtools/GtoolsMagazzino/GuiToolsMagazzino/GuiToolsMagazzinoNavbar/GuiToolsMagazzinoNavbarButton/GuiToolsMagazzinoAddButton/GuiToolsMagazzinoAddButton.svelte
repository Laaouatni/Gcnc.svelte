<script lang="ts">
  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";

  export let GisPopupOpen: boolean;

  function handleClick() {
    GisPopupOpen = true;
  }
</script>

<GuiButton on:click={handleClick} Gcolor="green-500">add</GuiButton>
