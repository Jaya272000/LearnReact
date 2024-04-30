import React, { useState } from 'react'

const Todo = () => {
  // for display data of to do list 
  const todolist=[
    {id:1,task:'Complete Assigment',done:'false'},
    {id:3,task:'Shopping',done:'false'}
  ]
  const[todos,settodo]=useState(todolist)

  const todoitems=todos.map(todo=>{
    return(
      <div>
        <h4>{todo.task}</h4>
        <button onClick={handleDeleteTodo}>Delete</button>
      </div>
    )
  })
  // function handleDeleteTodo(){

  // }
  function handleaddtodo(event){
    const task=event.target.previousElementSibling.value;

    const id=todos[todos.length-1].id+1
    settodo([
      ...todos,
      {
        id:id,
        task:task,
        done:false

      }
       
      
    ])
     
  }
  return (
    <div>
      <section>
        <input type="text" />
        <button onClick={handleaddtodo}>Add</button>
      </section>
      {todoitems}
      
    </div>
  )
}

export default Todo
