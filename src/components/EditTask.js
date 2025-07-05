import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext'

function EditTask() {

    const { editTask , item} = useContext(TaskContext);
    const [title, setTitle] = useState('')

    useEffect(()=>{
        if(item !== null)
        {
            setTitle(item.title)
        }
    },[item])

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask({ title: title, id:item.id })
        setTitle('')
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    return (
        <>
            <form className="border rounded-4 shadow p-4 my-5 bg-light" onSubmit={handleSubmit}>
                <h1 className="text-center display-5 text-primary fw-bold mb-4">Edit Task</h1>

                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg border-primary-subtle shadow-sm"
                        placeholder="Type Title of Task"
                        autoFocus
                        onChange={handleChange}
                        value={title}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm">
                    Submit
                </button>
            </form>
        </>
    );
};

export default EditTask;
