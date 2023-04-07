<script lang="ts">
  import GuiPopupCloseButton from "./GuiPopupCloseButton/GuiPopupCloseButton.svelte";

  export let GisPopupOpen: boolean;
</script>

<div
  class="sticky top-0 w-full flex justify-end from-transparent to-white bg-gradient-to-t p-2"
>
  <GuiPopupCloseButton bind:GisPopupOpen />
</div>
