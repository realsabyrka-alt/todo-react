import * as React from 'react'
import { Field } from './Field'
import { Button } from './Button'

interface AddTaskFormProps {
  addTask: () => void
  newTaskTitle: string
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>
  newTaskInputRef: React.Ref<HTMLInputElement>
}

export const AddTaskForm = ({ addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef }: AddTaskFormProps) => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.currentTarget.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
