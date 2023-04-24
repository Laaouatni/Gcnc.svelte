<script lang="ts">
  import GuiTitle from "$Gui/GuiTitle/GuiTitle.svelte";
  import GmachineStore from "$Gdatabase/Gmachine/stores/StoreGmachine";
</script>

<GuiTitle Gtitle="machine" />

<pre><code>{JSON.stringify($GmachineStore, null, 3)}</code></pre>
