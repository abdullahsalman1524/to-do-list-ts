import React from 'react'
import { Todo } from './model';
import SingleTodo from './SingleTodo';
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList: React.FC<props> = ({todos, setTodos}) => {
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo todo = {todo}  key={todo.id} todos={todos} setTodos={setTodos} />
      ) )}
    </div>
  )
}

export default TodoList
