<script lang="ts">
  import GuiToolsMagazzinoAddButton from './GuiToolsMagazzinoNavbarButton/GuiToolsMagazzinoAddButton/GuiToolsMagazzinoAddButton.svelte'
  import GuiToolsMagazzinoNavbarDeleteButton from './GuiToolsMagazzinoNavbarButton/GuiToolsMagazzinoDeleteButton/GuiToolsMagazzinoDeleteButton.svelte'

  export let GisPopupOpen: boolean;
</script>

<div class="flex bg-white w-full p-4 gap-4">
  <GuiToolsMagazzinoAddButton bind:GisPopupOpen />
  <GuiToolsMagazzinoNavbarDeleteButton />
</div>
