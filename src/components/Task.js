import React,{useContext} from 'react'
import { TaskContext } from '../context/TaskContext'


const Task = ({item}) => {

    const {removeItem,findTask} = useContext(TaskContext);

    return (
        <li className="border rounded-4 shadow-sm p-4 mb-3 bg-white" >
            <span className="fw-bold fs-5 text-primary">{item.title}</span>
            <button className="btn btn-danger btn-sm float-end" onClick={()=>removeItem(item.id)}>Delete</button>
            <button className="btn btn-info btn-sm text-white float-end me-2" onClick={()=>findTask(item.id)} >Edit</button>
        </li>
    )
}

export default Task
