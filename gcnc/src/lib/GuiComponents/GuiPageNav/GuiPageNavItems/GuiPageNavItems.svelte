<script lang="ts">
  export let GpageObj: {GpageName: string, GpageRoute: string};
</script>

<a class="grid p-4 hover:bg-slate-200 w-full text-center" href={GpageObj.GpageRoute}>
  <span class="font-bold">{GpageObj.GpageName}</span>
</a>
