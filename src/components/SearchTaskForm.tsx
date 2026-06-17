import { Field } from './Field'

interface SearchTaskFormProps {
  onSearchInput: (query: string) => void
}

export const SearchTaskForm = ({ onSearchInput }: SearchTaskFormProps) => {
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
        onInput={(event) => onSearchInput(event.currentTarget.value)}
      />
    </form>
  )
}
