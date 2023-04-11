<script lang="ts">
  export let GpageObj: { GpageName: string; GpageRoute: string };

  import { page } from "$app/stores";

  $: isSamePage = $page.route.id === GpageObj.GpageRoute;
  $: href = isSamePage ? "#" : GpageObj.GpageRoute;
</script>

<a
  class="grid p-4 hover:bg-slate-200 w-full text-center place-items-center transition
  {isSamePage ? "bg-slate-300" : ""}"
  {href}
>
  <span class="font-bold [writing-mode:vertical-lr] text-xl">{GpageObj.GpageName}</span>
</a>
