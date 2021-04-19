import { useReducer, useState } from "react"

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"

type CountAction = { type: typeof INCREMENT } | { type: typeof DECREMENT }

function reducerCount(state: number, action: CountAction) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

type Todo = {
  id: number
  text: string
  completed: boolean
}

type Todos = Todo[]

type TodosAction =
  | {
      type: typeof ADD_TODO
      payload: string
    }
  | { type: typeof TOGGLE_TODO; payload: number }

function reducerTodos(state: Todos, action: TodosAction): Todos {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: state.length, text: action.payload, completed: false }]
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      )
    default:
      return state
  }
}

export const ThirdPart: React.FC = () => {
  const [count, dispatchCount] = useReducer(reducerCount, 0)

  const [todos, dispatchTodos] = useReducer(reducerTodos, [])

  const [text, setText] = useState("")
  return (
    <>
      <div>
        <div>count: {count}</div>
        <button onClick={() => dispatchCount({ type: INCREMENT })}>increment</button>
        <button onClick={() => dispatchCount({ type: DECREMENT })}>decrement</button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatchTodos({ type: ADD_TODO, payload: text })
          setText("")
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Add a todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      {todos.map((t) => (
        <div
          key={t.id}
          onClick={() => {
            dispatchTodos({ type: TOGGLE_TODO, payload: t.id })
          }}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
    </>
  )
}
