import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css'

//components
import NavBar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

//context
import { TaskContextProvider } from './context/TaskContext';

function App() {
  return (
    <div className="app position-relative">
      <div className="overlay"></div> {/* ده يفضل أول عنصر جوا .app */}
      <BrowserRouter>
        <TaskContextProvider>
          <div className="app-content position-relative" style={{ zIndex: 2 }}>
            <NavBar />
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto cont-app my-5">
                  <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/add-task" element={<AddTask />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </TaskContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
