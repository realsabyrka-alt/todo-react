import type { Task } from './Todo'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  tasks: Task[]
  onDeleteTaskButtonClick: (taskId: string) => void
  onTaskCompleteChange: (taskId: string, isDone: boolean) => void
}

export const TodoList = ({
  tasks = [],
  onDeleteTaskButtonClick,
  onTaskCompleteChange,
}: TodoListProps) => {
  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
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
