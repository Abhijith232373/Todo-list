import React, { useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoList from './TodoList'
import { useRef } from 'react'

const Tudo = () => {
  const [todoList,setTodoList]=useState([]);
  const  inputRef=useRef();
  const  add=()=>{

       const inputText= inputRef.current.value.trim();
if(inputText ===""){
  return null;

}

const  newTodo={
  id:Date.now(),
  text:inputText,
  isComplete:false,
}       
  setTodoList((prev)=>[...prev,newTodo]);
  inputRef.current.value="";
}
  return (


    <div className='bg-white flex flex-col place-self-center w-11/12 max-w-md min-h-[550px] rounded-2xl pt-8 pl-4 p-8'  >
      <div className='flex'>

        <img src={todo_icon} className='w-8 mr-5' alt="" />
        <h1 className=' text-3xl font-semibold  '>Todo List</h1>
      </div>


      <div className='flex items-center my-7 bg-gray-200 rounded-full'  >

        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 ' type="text" placeholder='Add ypur task' />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg fony-medium cursor-pointer'  >Add +</button>


      </div>

      {todoList.map((item,index)=>{
        return <TodoList key={index} text={item.text}/>
      })}
      <div>



      </div>



    </div>
  )
}

export default Tudo

//46:20