<script lang="ts">
  import GuiRouteLinkOrSlot from "$Gui/GuiRouteLink/GuiRouteLinkOrSlot/GuiRouteLinkOrSlot.svelte";

  export let isActive: boolean;
  export let Ghref: string | null = null;
</script>

<div
  on:click
  class="relative grid gap-2 rounded-md shadow-sm active:scale-[0.99] transition
  {Ghref ? '' : 'p-3'}
  {isActive
    ? 'border-2 border-l-8 border-green-300 hover:border-green-400'
    : 'border hover:border-gray-400'}"
>
  <GuiRouteLinkOrSlot {Ghref}>
    <slot />
  </GuiRouteLinkOrSlot>
</div>
