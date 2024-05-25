import React, {useState} from 'react'
import InputField from './InputField';
import {Todo} from './model'
import TodoList from './TodoList';
// this function has a return type of function component
const App : React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  // todo here we have created an array of type interface
  const [todos, setTodos] = useState<Todo[]>([])


  const handleAdd = (event: React.FormEvent<EventTarget>):void => {
    event.preventDefault();

    if (todo) {
      // todo todos jo ha wo Todo Model accepts kary ga,
      // todo wo hum as an object pass karin gay
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);

      setTodo("");
    }
  }

  console.log(todo)
  return (
    <div className='bg-blue-300 py-10 h-[100vh] text-4xl text-center'>Advanced To List
      <InputField todo={todo} setTodo={setTodo} handleAdd= {handleAdd} />
      <TodoList />
    </div>
  )
}

export default App
