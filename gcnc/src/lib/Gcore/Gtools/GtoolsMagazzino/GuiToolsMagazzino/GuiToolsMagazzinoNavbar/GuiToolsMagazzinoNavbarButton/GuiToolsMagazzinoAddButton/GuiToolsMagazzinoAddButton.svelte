<script lang="ts">
  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let GisPopupOpen: boolean;

  function handleClick() {
    GisPopupOpen = true;
    goto("/devDemo/Gtools/addTool", {
      state: {
        fromPage: $page?.route?.id,
      },
    });
  }
</script>

<GuiButton on:click={handleClick} Gcolor="green-500">add</GuiButton>
