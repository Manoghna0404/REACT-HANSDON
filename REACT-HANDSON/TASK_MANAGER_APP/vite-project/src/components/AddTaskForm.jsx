import React from 'react'
import {useForm} from 'react-hook-form'


function AddTaskForm({addNewTask}) {
    const {register,handleSubmit,reset,formState:{errors}}=useForm();
    
       const onFormSubmit=(task)=>{
        const taskObj={
            id:Math.random(),
            ...task,
            completed:false
        };
        console.log(taskObj)
        addNewTask(taskObj)
        reset()
       }
  return (
    <div>
        <div>
            <h3 className='text-3xl text-amber-400'>Add Task</h3>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className='flex flex-col'>
                <input type="text" {...register("title",{required:true,minLength:3})} placeholder='Enter a title for task' className='mt-2 mb-2 border-2 p-2 ' ></input>
                {
                    errors.title?.type==="required" && <p className='text-red-400'>Title is required</p>
                }
                {
                    errors.title?.type==="minLength" && <p>Title should have minimum of 3 characters</p>
                }
                <input type="text" {...register("priority",{required:true})} placeholder='Enter priority of task' className='mt-2 mb-2 border-2 p-2  '></input>
                {
                    errors.priority?.type==="required" && <p className='text-red-400'>Priority is required</p>
                }
                <button type='submit' className='bg-yellow-300 p-3 border-r-4 mt-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTaskForm