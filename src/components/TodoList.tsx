import * as React from 'react'
import { memo } from 'react'
import type { Task } from './Todo'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  tasks: Task[]
  filteredTasks: Task[] | null
  firstIncompleteTaskRef: React.Ref<HTMLLIElement>
  firstIncompleteTaskId?: string
  onDeleteTaskButtonClick: (taskId: string) => void
  onTaskCompleteChange: (taskId: string, isDone: boolean) => void
}

export const TodoList = memo(({
  tasks = [],
  filteredTasks,
  onDeleteTaskButtonClick,
  onTaskCompleteChange,
  firstIncompleteTaskRef,
  firstIncompleteTaskId,
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
          ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  )
})
