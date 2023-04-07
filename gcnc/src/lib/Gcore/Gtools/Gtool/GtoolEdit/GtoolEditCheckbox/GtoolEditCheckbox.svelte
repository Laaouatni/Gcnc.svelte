<script lang="ts">
  import GtoolsStore from "$database/Gtools/GtoolsStore";
  import type GtoolInterface from "$database/Gtools/GtoolInterface";
  import GuiTooltipTwPeer from "$src/lib/GuiComponents/GuiTooltipTwPeer/GuiTooltipTwPeer.svelte";

  export let GtoolId: number;
  export let isGtoolChecked: boolean = false;

  $: GtoolsStore.update((Gtools: GtoolInterface[]) => {
    return Gtools.map((Gtool) => {
      if (Gtool.id === GtoolId) {
        Gtool.isEditChecked = isGtoolChecked;
      }
      return Gtool;
    });
  });

  $: actionStringName = isGtoolChecked ? "deselect" : "select";
</script>

<div class="absolute right-3 top-3 flex gap-3 flex-row-reverse">
  <input
    bind:checked={isGtoolChecked}
    type="checkbox"
    class="h-5 w-5 peer"
    on:click|stopPropagation
  />
  <GuiTooltipTwPeer>
    Click to
    <span class="font-bold">{actionStringName}</span>
    this tool N.
    <span class="font-bold">{GtoolId}</span>
  </GuiTooltipTwPeer>
</div>
