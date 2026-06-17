import type { Task } from './Todo'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  tasks: Task[]
}

export const TodoList = ({ tasks = [] }: TodoListProps) => {
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
          {...task}
        />
      ))}
    </ul>
  )
}
