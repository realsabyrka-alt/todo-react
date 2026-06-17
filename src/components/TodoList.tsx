import type { Task } from './Todo'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  tasks: Task[]
  filteredTasks: Task[] | null
  onDeleteTaskButtonClick: (taskId: string) => void
  onTaskCompleteChange: (taskId: string, isDone: boolean) => void
}

export const TodoList = ({
  tasks = [],
  filteredTasks,
  onDeleteTaskButtonClick,
  onTaskCompleteChange,
}: TodoListProps) => {
  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  )
}
