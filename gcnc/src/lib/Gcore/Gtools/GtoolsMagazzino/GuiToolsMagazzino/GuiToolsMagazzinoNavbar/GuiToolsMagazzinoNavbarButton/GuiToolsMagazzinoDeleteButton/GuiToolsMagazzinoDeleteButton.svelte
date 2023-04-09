<script lang="ts">
  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";
  import GtoolsStore from "$database/Gtools/GtoolsStore";

  $: isAtLeastOneChecked = $GtoolsStore.some((obj) => obj.isEditChecked);
  $: totalItemsChecked = $GtoolsStore.filter((obj) => obj.isEditChecked).length;

  function handleDeleteTools() {
    GtoolsStore.update((obj) => {
      return obj.filter((obj) => !obj.isEditChecked);
    });
  }
</script>

{#if isAtLeastOneChecked}
  <GuiButton Gcolor="red-500" on:click={handleDeleteTools}>
    delete {totalItemsChecked} items
  </GuiButton>
{/if}
