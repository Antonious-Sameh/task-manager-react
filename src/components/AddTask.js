import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext'
import TaskList from './TaskList';

function AddTask() {

    const { addTask } = useContext(TaskContext);

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title: title, id: Math.floor(Math.random() * 100000) })
        setTitle('')
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    return (
        <>
            <form className="border rounded-4 shadow p-4 my-5 bg-light" onSubmit={handleSubmit}>
                <h1 className="text-center display-5 text-primary fw-bold mb-4">Add New Task</h1>

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
            <TaskList />
        </>
    );
};

export default AddTask;
