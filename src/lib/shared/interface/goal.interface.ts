import type { ITask } from "./task.interface"

export interface IGoal {
  id: string
  title: string
  image: string
  tasks: ITask[]
}
