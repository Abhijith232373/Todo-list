import React, { useEffect, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoList from './TodoList'
import { useRef } from 'react'

const Tudo = () => {
  const [todoList,setTodoList]=useState(localStorage.getItem("todos")?
JSON.parse(localStorage.getItem("todos")):[]);
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
const deleteTodo =(id)=>{
setTodoList((prevTodos)=>{
   return prevTodos.filter((todo)=> todo.id !==id)
})
}



const toggle =(id)=>{
  setTodoList((prev)=>{
    return prev.map((todo)=>{
      if(todo.id ===id ){
        return {...todo,isComplete:!todo.isComplete}
      }
      return todo;
    })
  })
}


useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList));
  
},[todoList])
  return (


    <div className='bg-white flex flex-col place-self-center w-11/12 max-w-md min-h-[650px] rounded-2xl pt-8 pl-4 p-8'  >
      <div className='flex'>

        <img src={todo_icon} className='w-8 mr-5' alt="" />
        <h1 className=' text-3xl font-semibold  '>Todo List</h1>
      </div>


      <div className='flex items-center my-7 bg-gray-200 rounded-full'  >

        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 ' type="text" placeholder='Add ypur task' />
        <button onClick={add} className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg fony-medium cursor-pointer'  >Add +</button>


      </div>

      {todoList.map((item,index)=>{
        return <TodoList key={index} text={item.text} id={item.id}
        isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
      })}
      <div>



      </div>



    </div>
  )
}

export default Tudo
