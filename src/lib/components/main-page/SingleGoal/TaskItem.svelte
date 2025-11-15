<script lang="ts">
  import type { ITask } from "$lib/shared/interface/task.interface"
  import { goalsStore } from "$lib/store/localStore.svelte"
  import { cn } from "$lib/utils"
  import { Check } from "@lucide/svelte"

  interface Props {
    task: ITask
  }

  let { task }: Props = $props()

  const completeTask = () => {
    goalsStore.value
      .find(goal => goal.tasks.find(t => t.id === task.id))
      ?.tasks.forEach(t => {
        if (t.id === task.id) {
          t.isComplated = !t.isComplated
        }
      })
  }
</script>

<button
  onclick={completeTask}
  class="flex items-center gap-3 py-2"
>
  <span class="rounded-md w-5 h-5 border-[1.5px] border-white/25 flex items-center justify-center shadow">
    <Check
      class={cn(
        "transition-opacity",
        task.isComplated
          ? "opacity-100"
          : "opacity-0"
        )}
    />
  </span>
  <span
    class={cn(
      "transition-colors",
      task.isComplated
        ? "line-through opacity-25"
        : ""
    )}
  >
    {task.title}
  </span>
</button>
