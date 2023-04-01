<script lang="ts">
  import twColors from "tailwindcss/colors";

  export let Gcolor: string;

  let hexColor: string = "";

  $: {
    const [key, value] = Gcolor.split("-");

    // @ts-ignore
    hexColor = twColors[key][value];
  }
</script>

<button
  on:click
  style={`
    --tw-shadow-color: ${hexColor};
    background-color: ${hexColor};
  `}
  class="flex-1 shadow-lg shadow-inherit rounded-lg p-4 text-white font-semibold uppercase transition"
>
  <slot />
</button>
