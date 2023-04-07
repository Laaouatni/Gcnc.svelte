<script lang="ts">
  import GuiPopupCloseButton from "./GuiPopupCloseButton/GuiPopupCloseButton.svelte";

  export let GisPopupOpen: boolean;
</script>

<div
  class="sticky top-0 w-full flex justify-start from-transparent to-white bg-gradient-to-t p-2 flex-row-reverse gap-2"
>
  <GuiPopupCloseButton bind:GisPopupOpen />
</div>
