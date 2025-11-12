<script lang="ts">
  import type { Component } from "svelte"
  import classNames from 'classnames'

  interface Props {
    children: Component
    withBorderBottom?: boolean
    className?: string
  }

  let { children, withBorderBottom = false, className = "" }: Props = $props();

  let ChildComponent = children
</script>

<header
  class={classNames(className, "p-4")}
  class:border-b={withBorderBottom}
  class:border-b-neutral-400={withBorderBottom}
>
  <ChildComponent />
</header>
