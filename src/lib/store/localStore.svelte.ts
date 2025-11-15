import type { IGoal } from "$lib/shared/interface/goal.interface"

class LocalStore<T> {
  value = $state<T>() as T

  constructor(key: string, initial: T) {
    const stored = localStorage.getItem(key)

    this.value = stored ? JSON.parse(stored) : initial

    $effect.root(() => {
      $effect(() => {
        localStorage.setItem(key, JSON.stringify(this.value))
      })
    })
  }
}

export const goalsStore = new LocalStore<IGoal[]>("goals", [
  {
    id: "goal-1",
    title: "Create Growth",
    image: "/goals/wp-1.jpg",
    tasks: [
      { id: "task-1", title: "Research market tends 1", isComplated: true },
      { id: "task-2", title: "Research market tends 2", isComplated: false },
      { id: "task-3", title: "Research market tends 3", isComplated: false },
      { id: "task-4", title: "Research market tends 3", isComplated: false },
      { id: "task-5", title: "Research market tends 3", isComplated: false },
    ],
  },
])
