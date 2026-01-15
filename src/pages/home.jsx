import { Link } from 'react-router-dom';

const Home = ({ tasks, onToggle, onDelete }) => {
    return (
        <div className="home-container">
            <h1>To-Do List</h1>

            <Link to="/ajouter" className="add-link">
                <button className="btn-primary">+ Ajouter une nouvelle tâche</button>
            </Link>

            {/*"tasks.length === 0" → "Est-ce que la liste est vide ?"
             "?" → Si oui alors on affiche un message pour ne pas laisser l'utilisateur avec une page blanche.
            ":" → Si non il y a des tâches, on affiche la liste.*/}
            {tasks.length === 0 ? (
                <p>Vous n'avez plus de tâches.</p>
            ) : (

                <ul className="task-list">
                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            {/* Style pour barrer le texte si la tâche est terminé */}
                            <span style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                color: task.completed ? '#888' : '#000'
                            }}>
                                {task.title}
                            </span>

                            <div className="actions">
                                {/* Bouton Statut : Changer le message selon l'état */}
                                <button onClick={() => onToggle(task.id)} title="Changer le statut">
                                    {task.completed ? "✅" : "⌛"}
                                </button>

                                <Link to={`/tache/${task.id}`} className="btn-details">Détails</Link>

                                {/* Bouton Supprimer : On demande avant de vraiment supprimer */}
                                <button onClick={() => window.confirm("Supprimer ?") && onDelete(task.id)} className="btn-delete">
                                    Supprimer</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;