import { Todo } from '../../App'

export const Header = (props: { todos: Todo[] }) => {
  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-items': 'center',
      }}
    >
      <h1>Todo List</h1>
      <p
        style={{
          height: '12px',
          'line-height': '12px',
          'text-align': 'center',
          'margin-left': '20px',
        }}
      >
        todoCount: {props.todos.length}
      </p>
    </div>
  )
}
