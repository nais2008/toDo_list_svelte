<script lang="ts">
  import { cn } from "$lib/utils"
  import type { IconProps } from "@lucide/svelte"
  import type { Component } from "svelte"

  interface Props {
    Icon: Component<IconProps>
    className?: string
  }

  let { Icon, className }: Props = $props();
</script>

<button class={cn("flex h-5 w-5 items-center justify-center border border-white rounded-full transition-opacity opacity-60 hover:opacity-100", className)}>
  <Icon size={15} />
</button>
