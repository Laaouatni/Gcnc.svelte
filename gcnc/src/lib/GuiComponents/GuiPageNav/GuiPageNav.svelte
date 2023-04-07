<script lang="ts">
  import GuiPageNavItems from "./GuiPageNavItems/GuiPageNavItems.svelte";

  export let GpagesArray: { GpageName: string; GpageRoute: string }[];

  export let navWidth: number;
</script>

<nav
  bind:clientWidth={navWidth}
  class="grid justify-around bg-slate-100 fixed top-0 shadow-md h-full z-10"
>
  {#each GpagesArray as Gpage}
    <GuiPageNavItems GpageObj={Gpage} />
  {/each}
</nav>
