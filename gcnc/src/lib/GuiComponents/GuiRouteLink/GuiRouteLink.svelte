<script lang="ts">
  export let Ghref: string;
</script>

<a href={Ghref} class="p-3 w-full {$$props.class}">
  <slot />
</a>
