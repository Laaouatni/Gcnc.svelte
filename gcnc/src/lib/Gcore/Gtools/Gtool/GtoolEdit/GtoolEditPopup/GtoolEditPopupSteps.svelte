<script lang="ts">
  import GuiButton from "$Gui/GuiButton/GuiButton.svelte";

  const modules = import.meta.glob("./Pages/*.svelte", { eager: true });
  const pages = Object.keys(modules).map((key) => modules?.[key]?.default);
</script>

<!-- !todo: you need to add click to change page and refactor it so it uses a export let -->
{#each pages as page}
  <svelte:component this={page} />
{/each}

<div class="flex gap-4 sticky left-0 bottom-0 bg-white py-4 border-4">
  <GuiButton Gcolor="blue-400">⬅️ Prev</GuiButton>
  <GuiButton Gcolor="blue-500">➡️ Next</GuiButton>
</div>
