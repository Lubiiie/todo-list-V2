import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// On remonte d'un dossier (..) pour sortir de 'utils' et aller dans 'pages'
import Home from "../pages/home";
import AddTask from "../pages/addtask";
import TaskDetail from "../pages/taskdetail";
import NotFound from "../pages/NotFound";
import "../styles/App.css";

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Première tâche test", description: "C'est un test", completed: false }
    ]);

    // Fonction "AJOUTER"
    const addTask = (title, description) => {
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
            title,
            description,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    // Fonction "STATUT DE LA TÂCHE"
    const toggleStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Fonction "SUPPRIMER" avec ".filter" pour supprimer le bon ID
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <Home tasks={tasks} onToggle={toggleStatus} onDelete={deleteTask} />
                } />
                <Route path="/ajouter" element={<AddTask onAddTask={addTask} />} />
                <Route path="/tache/:id" element={<TaskDetail tasks={tasks} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;

