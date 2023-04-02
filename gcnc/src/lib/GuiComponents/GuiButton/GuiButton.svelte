<script lang="ts">
  import { scale } from 'svelte/transition'
  import twColors from 'tailwindcss/colors'

  export let Gcolor: string

  let hexColor: string = ''

  $: {
    const [key, value] = Gcolor.split('-')

    // @ts-ignore
    hexColor = twColors[key][value]
  }
</script>

<style>
  button {
    --tw-shadow-color: var(--hex-color);
    background-color: var(--hex-color);
  }
</style>

<button
  on:click
  style="--hex-color: {hexColor};"
  class="flex-1 shadow-lg shadow-inherit rounded-lg p-4 text-white font-semibold
  uppercase transition active:scale-[0.99]"
  transition:scale>
  <slot />
</button>
