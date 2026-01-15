import { useParams, Link } from 'react-router-dom';

/* "useParams()" → C'est un crochet (hook) qui va lire l'URL.
       Si l'adresse est /tache/2, il récupère l'ID "2". */
const TaskDetail = ({ tasks }) => {
    const { id } = useParams();
    const task = tasks.find(t => t.id === Number(id));
    /* ".find()" → On fouille dans la liste "tasks" pour trouver la tâche qui a le bon ID.
       "Number(id)" → Obligatoire car l'ID de l'URL est du texte, mais notre ID est un chiffre. */

    /* Sécurité = Si l'utilisateur tape un ID qui n'existe pas */
    if (!task) return <h2>Tâche introuvable.</h2>;

    //VISUEL
    return (
        <div className="task-card">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Statut : {task.completed ? "Terminée" : "En cours"}</p>
            <Link to="/">← Retour</Link>
        </div>
    );
};

export default TaskDetail;