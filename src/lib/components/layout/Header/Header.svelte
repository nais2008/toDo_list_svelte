<script lang="ts">
  import type { Component } from "svelte"

  interface Props {
    children: Component
    withBorderBottom?: boolean
    className?: string
  }

  let { children, withBorderBottom = false, className = "" }: Props = $props();

  let ChildComponent = children
</script>

<header
  class={className}
  class:border-b={withBorderBottom}
  class:border-b-neutral-800={withBorderBottom}
>
  <ChildComponent />
</header>
