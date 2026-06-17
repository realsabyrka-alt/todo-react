import { AddTaskForm } from './AddTaskForm'
import { SearchTaskForm } from './SearchTaskForm'
import { TodoInfo } from './TodoInfo'
import { TodoList } from './TodoList'

export interface Task {
  id: string
  title: string
  isDone: boolean
}

export const Todo = () => {
  const tasks: Task[] = [
    { id: 'task-1', title: 'Купить молоко', isDone: false },
    { id: 'task-1', title: 'Погладить кота', isDone: true },
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  )
}
