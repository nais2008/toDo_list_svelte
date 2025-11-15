<script lang="ts">
  import IconCircle from "$lib/components/layout/IconCircle"
  import GoalProgress from "$lib/components/sidebar/GoalsList/GoalProgress.svelte"
  import { activeGoalStore } from "$lib/store/activeGoalStore.svelte"
  import calcTotalProgress from "$lib/utils/calcTotalProgress"
  import { Flame } from "@lucide/svelte"
  import TaskItem from "./TaskItem.svelte"
  import { goalsStore } from "$lib/store/localStore.svelte"

  let newTaskTitle = ""

  const createTask = (e: KeyboardEvent) => {
    if (e.key === "Enter" && newTaskTitle.trim() && activeGoalStore.goal) {
      const foundedGoal = goalsStore.value.find(g => g.id === activeGoalStore.goal?.id)
      if (foundedGoal) {
        activeGoalStore.goal.tasks = [
          ...activeGoalStore.goal.tasks,
          {
            id: crypto.randomUUID(),
            title: newTaskTitle.trim(),
            isComplated: false,
          }
        ]

        newTaskTitle = ""
      }
    }
  }
</script>

<div class="mx-auto w-10/12 py-layout">
  <img
    src={activeGoalStore.goal?.image}
    alt={activeGoalStore.goal?.title}
    class="w-full h-[500px] rounded-xl mb-2"
    style="filter: saturate(120%);"
  />

  <h1 class="mb-2 border-b border-b-neutral-800 pb-3 text-2xl font-medium">
    {activeGoalStore.goal?.title}
  </h1>

  <div class="flex items-center justify-between">
    <GoalProgress
      isAlternative
      progress={calcTotalProgress(activeGoalStore.goal)}
    />
    <div class="mt-2 flex items-center gap-2 text-sm">
      {activeGoalStore.goal?.tasks.length} Steps
      <IconCircle Icon={Flame} className="opacity-100" />
    </div>
  </div>

  <div class="mt-5">
    {#each activeGoalStore.goal?.tasks as task}
      <TaskItem task={task} />
    {/each}
  </div>

  <div
    class="mt-4 flex w-2xs items-center gap-1.5 rounded border border-transparent px-2 py-[0.20rem] transition-colors focus-within:border-white/15"
  >
    <input
      type="text"
      placeholder="Add new task (Enter to submit)"
      class="bg-transparent outline-0 w-full"
      bind:value={newTaskTitle}
      onkeydown={createTask}
    />
  </div>
</div>
