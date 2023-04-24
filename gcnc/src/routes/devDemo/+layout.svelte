<script lang="ts">
  import { navigating } from "$app/stores";
  import type { Navigation as TypeNavigation } from "@sveltejs/kit";
  import { fade, fly, scale } from "svelte/transition";
  import { elasticInOut, elasticOut, linear } from "svelte/easing";

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

  let lastSavedFromToNavigating: TypeNavigation;

  $: if ($navigating != null && $navigating !== lastSavedFromToNavigating) {
    lastSavedFromToNavigating = $navigating;
  }

  const transitionToDo = (node: HTMLElement, args: object) => {
    const lastRoute = lastSavedFromToNavigating?.to?.route?.id;

    if (!lastRoute?.includes("steps")) return fly(node, args);
    return scale(node, { ...args });
  };

  // $: console.log("lastSavedFromToNavigating", lastSavedFromToNavigating);
</script>

<GuiPageNav GpagesArray={navigationArray} bind:navWidth />

{#key $navigating}
  {#if !$navigating}
    <main
      transition:transitionToDo={{
        x: window.innerWidth - navWidth,
        duration: SECOND_TIME * 2,
        easing: elasticOut,
      }}
      class="fixed w-full h-screen overflow-auto p-4 bg-white"
      style="--nav-width: {navWidth}px;"
    >
      <slot />
    </main>

    <!-- <main
      transition:fly={{
        x: window.innerWidth - navWidth,
        duration: SECOND_TIME * 2,
        easing: elasticInOut,
      }}
      class="fixed w-full h-screen overflow-auto p-4 bg-white"
      style="--nav-width: {navWidth}px;"
    >
      <slot />
    </main> -->
  {/if}
{/key}

<style>
  main {
    left: var(--nav-width);
    width: calc(100vw - var(--nav-width));
  }
</style>
