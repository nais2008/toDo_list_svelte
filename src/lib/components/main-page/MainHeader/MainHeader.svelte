<script lang="ts">
  import Header from "$lib/components/layout/Header"
  import IconCircle from "$lib/components/layout/IconCircle"
  import { Ellipsis, Plus, Search, Users } from "@lucide/svelte"


</script>

<Header className="p-layout flex items-center justify-between" withBorderBottom>
  <div class="flex items-center gap-1.5 rounded px-2 py-[.45rem] border border-transparent bg-[#222222] focus-within:border-white/15 transition-colors">
    <Search class="opacity-50" size={22} />

    <input
      type="search"
      placeholder="Search..."
      class="bg-transparent outline-0"
    />
  </div>

  <div class="flex items-center gap-4">
    <IconCircle Icon={Users} />
    <IconCircle Icon={Plus} />
    <IconCircle Icon={Ellipsis} />
  </div>
</Header>
