<script lang="ts">
  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";
  export let GisPopupOpen: boolean;

  const routeAddTool = "/devDemo/Gtools/addTool";

  function handleClick() {
    GisPopupOpen = true;
  }
</script>

<GuiButton 
  Ghref={routeAddTool} 
  on:click={handleClick} 
  Gcolor="green-500"
>
  add
</GuiButton>
