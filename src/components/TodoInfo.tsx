import { memo } from 'react'

interface TodoInfoProps {
  total: number
  done: number
  onDeleteAllButtonClick: () => void
}

export const TodoInfo = memo(({ total, done, onDeleteAllButtonClick }: TodoInfoProps) => {
  const hasTasks = total > 0

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={onDeleteAllButtonClick}
        >
          Delete all
        </button>
      )}
    </div>
  )
})
