import React from 'react'

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent<EventTarget>) => void;
}

const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {

  return (
    <form className="grid grid-cols-10 gap-4 mt-8" onSubmit={handleAdd}>
      <div className="col-span-7">
        <input type="text"
        value= {todo}
        onChange = { (e) => setTodo(e.target.value)}
        className="bg-white w-[70%] border rounded-2xl text-xl px-2 h-[51px]" />
      </div>
      <div className="col-span-3" >
        <button type="submit" className="bg-blue-600 absolute left-[987px] text-xl border rounded-3xl font-bold h-[53px] w-28 hover:bg-blue-800 text-white text-center px-4">Go</button>
      </div>
    </form>
  )
}

export default InputField
