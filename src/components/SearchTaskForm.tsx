import * as React from 'react'
import { Field } from './Field'

interface SearchTaskFormProps {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export const SearchTaskForm = ({
  searchQuery,
  setSearchQuery,
}: SearchTaskFormProps) => {
  return (
    <form
      className="todo__form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.currentTarget.value)}
      />
    </form>
  )
}
