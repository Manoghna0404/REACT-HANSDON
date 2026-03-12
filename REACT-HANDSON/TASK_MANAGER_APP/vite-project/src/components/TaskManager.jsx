import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { useState } from 'react'


function TaskManager(){
  const [tasks,setTasks]=useState([])
    const addTaskForm=(taskObj)=>{
      setTasks([...tasks,taskObj])
    }
    const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }
  const completedCount = tasks.filter(task => task.completed).length
  const totalTasks=tasks.length
    
  return (
    <div className='bg-gray-200 '>
      <h3 className='text-3xl text-amber-400 text-center'>Task Manager</h3>
      <div className='flex justify-around mt-2'>
        <AddTaskForm addNewTask={addTaskForm}/>
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
      </div>
      <div className='text-center mt-5 text-xl'>
        <p>Completed: {completedCount}</p>
        <p>Total Tasks:{totalTasks}</p>
      </div>

    </div>
  )
}

export default TaskManager