<script lang="ts">
  import GuiButton from "$lib/GuiComponents/GuiButton/GuiButton.svelte";
  import GtoolsStore from "../../../../../../../../database/Gtools/GtoolsStore";

  $: isAtLeastOneChecked = $GtoolsStore.some((obj) => obj.isEditChecked);
  $: totalItemsChecked = $GtoolsStore.filter((obj) => obj.isEditChecked).length;

  function handleDeleteTools() {
    GtoolsStore.update((obj) => {
      obj = obj.filter((obj) => !obj.isEditChecked);
      return obj;
    });
  }
</script>

<GuiButton Gcolor="red-500" on:click={handleDeleteTools}>
  delete {totalItemsChecked} items
</GuiButton>
