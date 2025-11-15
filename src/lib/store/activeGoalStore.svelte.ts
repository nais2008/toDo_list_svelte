import type { IGoal } from "$lib/shared/interface/goal.interface"

import { goalsStore } from "./localStore.svelte"

export const activeGoalStore = $state<{ goal: IGoal | null }>({
  goal: goalsStore.value[0],
})
