import TaskManager from './TaskManager'

function TaskItem({task,deleteTask,toggleTask}) {
  return (
    <div>
        <h3 className='text-3xl text-amber-400'>Task Item</h3>
        <h4>
        {task.title} - {task.priority}
      </h4>
        <button className='bg-yellow-300 p-3 border-r-4 mt-2 mr-2' onClick={()=>deleteTask(task.id)}>Delete</button>
        <button className='bg-yellow-300 p-3 border-r-4 mt-2' onClick={()=>toggleTask(task.id)}>Toggle</button>
    </div>
  )
}

export default TaskItem