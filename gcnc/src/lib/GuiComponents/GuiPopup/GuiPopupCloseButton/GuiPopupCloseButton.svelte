<script lang="ts">
  import GiconX from "$assets/icons/outlined/GiconX.svg"

  import GuiIcon from "$Gui/GuiIcon/GuiIcon.svelte";
</script>

<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
  <span class="sr-only">Close Popup</span>
  <GuiIcon Gsrc={GiconX}></GuiIcon>
</button>