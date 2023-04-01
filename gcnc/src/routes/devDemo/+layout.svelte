<script lang="ts">
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";

  import GuiPageNav from "$lib/GuiComponents/GuiPageNav/GuiPageNav.svelte";

  class Gpage {
    GpageName: string;
    GpageRoute: string;
    GpagePrefix: string;

    constructor(GpageName: string) {
      this.GpageName = GpageName;
      this.GpagePrefix = "devDemo";
      this.GpageRoute = `/${this.GpagePrefix}/${this.GpageName}`;
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
    in:slide
    class="fixed w-full overflow-auto p-4"
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
