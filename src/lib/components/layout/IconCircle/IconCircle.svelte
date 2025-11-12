<script lang="ts">
  import type { IconProps } from "@lucide/svelte"
  import type { Component } from "svelte"

  interface Props {
    Icon: Component<IconProps>
  }

  let { Icon }: Props = $props();
</script>

<button class="flex h-5 w-5 items-center justify-center border border-white rounded-full transition-opacity opacity-60 hover:opacity-100">
  <Icon size={15} />
</button>
