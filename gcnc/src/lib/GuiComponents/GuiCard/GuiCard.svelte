<script lang="ts">
  export let isActive: boolean;
</script>

<div
  on:click
  class="grid gap-2 p-3 rounded-md shadow-sm active:scale-[0.99] transition 
  {isActive
    ? 'border-2 border-b-8 border-green-300 hover:border-green-400'
    : 'border hover:border-gray-400'
  }"
>
  <slot />
</div>
