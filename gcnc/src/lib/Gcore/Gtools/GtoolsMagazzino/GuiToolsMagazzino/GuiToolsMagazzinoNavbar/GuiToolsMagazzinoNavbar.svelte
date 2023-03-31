<script lang="ts">
  import GtoolsStore from "../../../../../../database/Gtools/GtoolsStore";

  $: isAtLeastOneChecked = $GtoolsStore.some((obj) => obj.isEditChecked);
  $: totalItemsChecked = $GtoolsStore.filter((obj) => obj.isEditChecked).length;

  function handleDeleteTools() {
    GtoolsStore.update((obj) => {
      obj = obj.filter((obj) => !obj.isEditChecked);
      return obj;
    });
  }
</script>

<div class="flex bg-white w-full p-4 gap-4">
  <button
    class="flex-1 bg-green-500 shadow-lg shadow-green-500 rounded-lg p-4 text-white font-semibold uppercase transition"
    >add</button
  >

  <button
    class="bg-red-500 shadow-lg shadow-red-500 rounded-lg text-white font-semibold uppercase transition {isAtLeastOneChecked
      ? 'p-4 w-[50%]'
      : 'cursor-not-allowed w-0 text-[0]'}"
    on:click={handleDeleteTools}>delete {totalItemsChecked} items</button
  >
</div>
