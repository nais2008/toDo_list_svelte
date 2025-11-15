<script lang="ts">
  import { goalsStore } from "$lib/store/localStore.svelte"
  import GoalProgress from "./GoalProgress.svelte"
  import calcTotalProgress from "$lib/utils/calcTotalProgress"
  import { activeGoalStore } from "$lib/store/activeGoalStore.svelte"
  import { cn } from "$lib/utils"
  import CreateGoal from "./CreateGoal/CreateGoal.svelte"
</script>

<div class="p-layout">
  <div class="flex mb-4 items-center justify-between px-layout">
    <span>Goals</span>
    <button class="opacity-50 transition-opacity hover:opacity-100">
      <CreateGoal />
    </button>
  </div>

  <ul class="mx-2">
    {#each goalsStore.value as goal}
      <li>
        <button
          onclick={() => {
            activeGoalStore.goal = goal
          }}
          class={cn(
            "w-full rounded-lg px-3 py-2 mb-3 flex items-center justify-between transition-colors",
            activeGoalStore.goal?.id === goal.id
              ? "bg-[#222]"
              : "hover:bg-[#222]"
          )}
        >
          <span class="flex items-center gap-3">
            <img
              src="{goal.image}"
              alt=""
              class="w-9 h-11 rounded-lg object-cover"
            />
            <span class="text-sm">{goal.title}</span>
          </span>
          <GoalProgress progress={calcTotalProgress(goal)} />
        </button>
      </li>
    {/each}
  </ul>
</div>
