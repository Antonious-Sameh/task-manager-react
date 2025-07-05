import React, { useState, createContext, useEffect } from 'react'

export const TaskContext = createContext()
const initialState = [
    { title: "First Task", id: 1 },
    { title: "Second Task", id: 2 },
    { title: "Third Task", id: 3 }
];

export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState(() => {
        try {
            const saved = localStorage.getItem('tasks_list');
            return saved ? JSON.parse(saved) : initialState;
        } catch (e) {
            console.error('Error parsing localStorage:', e);
            return initialState;
        }
    });
    const [item, setItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks_list', JSON.stringify(tasks))
    }, [tasks])

    const removeItem = (id) => {

        const newTask = tasks.filter((item) => item.id !== id)
        setTasks(newTask)
    }

    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const findTask = (id) => {
        const task = tasks.find((item) => item.id === id)
        setItem(task)
    }

    const editTask = (task) => {
        const editTasks = tasks.map((item) => {
            return item.id === task.id ? task : item
        })

        setTasks(editTasks)
        setItem(null)
    }

    return (
        <TaskContext.Provider value={{ tasks, removeItem, addTask, findTask, item, editTask }}>
            {props.children}
        </TaskContext.Provider>
    )
}

