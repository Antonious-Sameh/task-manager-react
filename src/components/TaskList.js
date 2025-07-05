import React,{useContext} from 'react'
import { TaskContext } from '../context/TaskContext'
import Task from './Task';
import NotFound from './NotFound';
import EditTask from './EditTask';

const TaskList = () => {

    const {tasks,item} = useContext(TaskContext);
    

    return (
        <>
        {item ? <EditTask /> : ''}
            <h1 className="text-center display-5 text-primary fw-bold mb-4">All Tasks</h1>
            <ul className="list-unstyled mt-4 p-3">
                {tasks.length ? tasks.map((item,index)=>{
                    return (<Task item={item} key={index} />)
                }) : <NotFound /> }
            </ul>
        </>
    )
}

export default TaskList
