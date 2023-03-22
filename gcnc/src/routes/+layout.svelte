<script lang="ts">
  import "../app.css";

  import GuiBottomNav from "$lib/GuiComponents/GuiBottomNav/GuiBottomNav.svelte";

  class Gpage {
    GpageName: string;
    GpageRoute: string;

    constructor(GpageName: string) {
      this.GpageName = GpageName;
      this.GpageRoute = `./${GpageName}`;
    }
  }

  const navigationArray = [
    new Gpage("G1"),
    new Gpage("Gtools"),
  ];

  let navHeight: number;
</script>

<GuiBottomNav GpagesArray={navigationArray} bind:navHeight />

<main class="fixed w-full overflow-auto" style="--nav-height: {navHeight}px;">
  <slot />
</main>

<style>
  main {
    top: var(--nav-height);
    height: calc(100vh - var(--nav-height));
  }
</style>