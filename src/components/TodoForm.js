import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


const TodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
      });
    
      const handleTaskInput = (e) => {
        setTodo({ ...todo, task: e.target.value });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({...todo, id: uuidv4()});
            //reset task input
            setTodo({...todo, task: ""});
        }
      }

  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input onChange={handleTaskInput} value={todo.task} name="task" placeholder="Enter todo here..."/>
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm