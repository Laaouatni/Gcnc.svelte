<script lang="ts">
  export let GpageObj: { GpageName: string; GpageRoute: string };

  import GuiRouteLink from "$Gui/GuiRouteLink/GuiRouteLink.svelte";
  import { page } from "$app/stores";

  $: isSamePage = $page.route.id === GpageObj.GpageRoute;
  $: Ghref = isSamePage ? "#" : GpageObj.GpageRoute;
</script>

<GuiRouteLink
  {Ghref}
  class="grid p-4 hover:bg-slate-200 w-full text-center place-items-center transition
  {isSamePage ? 'bg-slate-300' : ''}"
>
  <span class="font-bold [writing-mode:vertical-lr] text-xl"
    >{GpageObj.GpageName}</span
  >
</GuiRouteLink>
