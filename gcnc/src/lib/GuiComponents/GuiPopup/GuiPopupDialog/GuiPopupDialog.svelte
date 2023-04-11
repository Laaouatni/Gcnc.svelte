<script lang="ts">
  import { scale } from "svelte/transition";

  import GuiPopupTopBar from "./GuiPopupTopBar/GuiPopupTopBar.svelte";

  export let GisPopupOpen: boolean;
</script>

<dialog
  transition:scale
  open
  class="shadow-2xl rounded-md border overflow-auto shadow-white p-0 max-w-[80%] max-h-[80%]"
>
  <GuiPopupTopBar bind:GisPopupOpen />
  <section class="leading-relaxed text-ellipsis p-4">
    <slot>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio repellendus hic dolorem. Totam illo dolorem qui quis atque blanditiis nam laboriosam nostrum cupiditate, quod possimus earum fugiat? Beatae, omnis?
    </slot>
  </section>
</dialog>
