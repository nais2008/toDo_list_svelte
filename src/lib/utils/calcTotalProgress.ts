import type { IGoal } from "$lib/shared/interface/goal.interface"

const calcTotalProgress = (goal: IGoal | null) => {
  if (!goal) return 0

  const totalTasks = goal.tasks.length

  if (totalTasks === 0) return 0

  const completedTasks = goal.tasks.filter((task) => task.isComplated).length

  return Math.round((completedTasks / totalTasks) * 100)
}

export default calcTotalProgress
