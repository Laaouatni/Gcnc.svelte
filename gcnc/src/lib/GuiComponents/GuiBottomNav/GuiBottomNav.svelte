<script lang="ts">
  import GuiBottomNavItems from "./GuiBottomNavItems/GuiBottomNavItems.svelte";

  export let GpagesArray: {GpageName: string, GpageRoute: string}[];

  export let navHeight: number;
</script>

<nav bind:clientHeight={navHeight}  class="flex justify-around bg-slate-100 fixed top-0 w-full shadow-md">
  {#each GpagesArray as Gpage}
    <GuiBottomNavItems GpageObj={Gpage}></GuiBottomNavItems>
  {/each}
</nav>