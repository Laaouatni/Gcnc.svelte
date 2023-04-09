<script lang="ts">
  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";

  import { handleOpen } from "$Gui/GuiPopup/GuiPopup.svelte";
  import { goto } from "$app/navigation";

  const URL = "/devDemo/Gtools/edit";

  function handleClick() {
    goto(URL);
    handleOpen();
  }
</script>

<GuiButton on:click={handleClick} Gcolor="green-500">add</GuiButton>
