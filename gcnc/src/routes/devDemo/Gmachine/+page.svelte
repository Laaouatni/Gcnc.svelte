<script lang="ts">
  import GuiTitle from "$lib/GuiComponents/GuiTitle/GuiTitle.svelte";
  import GmachineStore from "../../../database/Gmachine/GmachineStore";
</script>

<GuiTitle Gtitle="machine" />

<pre><code>{JSON.stringify($GmachineStore, null, 3)}</code></pre>
