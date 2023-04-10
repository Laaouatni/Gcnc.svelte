<script lang="ts">
  import { page } from "$app/stores";
  import { fade, fly, scale } from "svelte/transition";
  import { elasticInOut, elasticOut } from "svelte/easing";

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

  const SECOND_TIME = 1000;
</script>

<GuiPageNav GpagesArray={navigationArray} bind:navWidth />

{#key $page.route}
  <main
    transition:fly={{
      y: window.innerHeight,
      duration: SECOND_TIME * 1.7,
      easing: elasticInOut,
    }}
    class="fixed w-full h-screen overflow-auto p-4 bg-white"
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
