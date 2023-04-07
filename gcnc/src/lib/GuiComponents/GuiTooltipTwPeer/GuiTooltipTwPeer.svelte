<!--
  @component
  ## To make this work:
  You MUST SET `peer` tailwind class, to the previous html element manually

  ### Notes:
  you may need to style your parent element by adding `flex flex-row-reverse`, add some `gap` and so on... because this component is just a tooltip, not a container
-->

<span
  class="peer-hover:opacity-90 opacity-0 peer-hover:scale-100 scale-0 transition pointer-events-none capitalize bg-white border px-4 py-2 rounded-full shadow-lg"
>
  <slot></slot>
</span>
