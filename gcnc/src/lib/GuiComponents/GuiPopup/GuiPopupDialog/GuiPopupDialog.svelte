<script lang="ts">
  import { scale } from "svelte/transition";
  
  import GuiPopupTopBar from "./GuiPopupTopBar/GuiPopupTopBar.svelte";
</script>

<dialog
  transition:scale
  open
  class="shadow-2xl rounded-md border overflow-auto shadow-white p-0 max-w-[80%] max-h-[80%]"
>
  <GuiPopupTopBar />
  <section class="leading-relaxed text-ellipsis p-4">
    <slot></slot>
  </section>
</dialog>
