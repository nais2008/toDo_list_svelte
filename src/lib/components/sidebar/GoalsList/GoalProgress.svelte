<script lang="ts">
  import ProgressPie from "$lib/components/ui/icons/ProgressPie.svelte"
  import { cn } from "$lib/utils"

  interface Props {
    progress?: number
    isAlternative?: boolean
  }

  let {progress = 0, isAlternative = false}: Props = $props()
</script>

<span
  class={cn(
    "flex items-center gap-1.5",
    isAlternative
      ? "flex-row-reverse"
      : "",
  )}
>
  <span class={cn("text-sm", isAlternative ? "text-white" : "text-[#777]")}>{progress}%</span>
  <ProgressPie
    {progress}
    emptyColor={isAlternative ? "#222" : undefined}
    filledColor={isAlternative? "#fff" : undefined}
  />
</span>
