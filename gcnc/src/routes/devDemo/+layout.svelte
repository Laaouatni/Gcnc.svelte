<script lang="ts">
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";

  import GuiPageNav from "$Gui/GuiPageNav/GuiPageNav.svelte";

  class Gpage {
    GpageName: string;
    GpageRoute: string;

    constructor(GpageName: string) {
      this.GpageName = GpageName;
      this.GpageRoute = `/devDemo/${this.GpageName}`;
    }
  }

  const navigationArray = [
    new Gpage("G1"),
    new Gpage("Gtools"),
    new Gpage("Gmachine"),
  ];

  let navWidth: number;
</script>

<GuiPageNav GpagesArray={navigationArray} bind:navWidth />

{#key $page.route}
  <main
    in:fly={{ x: navWidth }}
    class="fixed w-full h-screen overflow-auto p-4"
    style="--nav-width: {navWidth}px;"
  >
    <slot />
  </main>
{/key}

<style>
  main {
    left: var(--nav-width);
    width: calc(100vw - var(--nav-width));
  }
</style>
