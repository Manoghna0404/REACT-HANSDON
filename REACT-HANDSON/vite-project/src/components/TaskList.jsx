import TaskItem from './TaskItem';

function TaskList({tasks,deleteTask,toggleTask}) {

  return (
    <div>
        <h3 className='text-3xl text-amber-400'>List of Tasks</h3>
        {
            tasks.length===0?(<p className='text-red-400'>Empty</p>):(tasks.map((tasks,index)=><p className='text-2xl' key={index}>{tasks.title} - {tasks.priority}</p>)) 
        }
        {
          (tasks.map((tasks)=><TaskItem key={tasks.id} task={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>)) 
        } 
    </div>
  )
}

export default TaskList