<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";

  import GuiBottomNav from "$lib/GuiComponents/GuiBottomNav/GuiBottomNav.svelte";

  class Gpage {
    GpageName: string;
    GpageRoute: string;

    constructor(GpageName: string) {
      this.GpageName = GpageName;
      this.GpageRoute = `./${GpageName}`;
    }
  }

  const navigationArray = [new Gpage("G1"), new Gpage("Gtools")];

  let navHeight: number;
</script>

<GuiBottomNav GpagesArray={navigationArray} bind:navHeight />

{#key $page.route}
  <main
    in:slide
    class="fixed w-full overflow-auto p-4"
    style="--nav-height: {navHeight}px;"
  >
    <slot />
  </main>
{/key}

<style>
  main {
    top: var(--nav-height);
    height: calc(100vh - var(--nav-height));
  }
</style>
