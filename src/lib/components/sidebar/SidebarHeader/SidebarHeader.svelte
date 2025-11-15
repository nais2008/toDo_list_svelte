<script lang="ts">
  import { PanelRightOpen } from "@lucide/svelte"

  import Header from "$lib/components/layout/Header"
</script>

<Header className="flex items-center justify-between p-layout" withBorderBottom>
  <div class="flex items-center gap-2">
    <img src="/avatar.png" alt="avatar" class="h-10 w-10 rounded-full">
    <span>Jessy Barret</span>
  </div>
  <button class="opacity-60 transition-opacity hover:opacity-100">
    <PanelRightOpen />
  </button>
</Header>
