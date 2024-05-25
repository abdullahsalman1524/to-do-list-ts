import React from 'react'

const TodoList: React.FC = () => {
  return (
    <div className='mx-10 flex px-4 my-2 text-md text-center py-2 bg-yellow-400 justify-between w-[35%] text-black'>
      <p>Name </p>
      <div className='flex gap-2 text-md'>
        <i className="fa fa-pencil" aria-hidden="true"></i>
        <i className="fa fa-trash" aria-hidden="true"></i>
        <i className="fa fa-check" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default TodoList
