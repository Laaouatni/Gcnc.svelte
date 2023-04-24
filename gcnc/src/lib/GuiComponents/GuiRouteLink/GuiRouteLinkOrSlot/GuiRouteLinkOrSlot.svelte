<script lang="ts">
  export let Ghref: string | null = null;

  import GuiRouteLink from "$Gui/GuiRouteLink/GuiRouteLink.svelte";
</script>

{#if Ghref}
  <GuiRouteLink {Ghref}>
    <slot />
  </GuiRouteLink>
{:else}
  <slot />
{/if}
