import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div>
        <ul>
        {todos.map((el) =>{
                
                <Todo key={el.id}  todo={el}/>
            })}
            
        </ul>
    </div>
  )
}



export default TodoList;