import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook pour changer de page par code

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate(); // On initialise la fonction de redirection

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page HTML
        if (title.trim()) {
            onAddTask(title, desc); // Envoie les données à App.jsx
            navigate("/"); // Rediriger l'utilisateur vers l'accueil
        }
    };

    return (
        /* "onSubmit={handleSubmit}" → Quand on clique sur le bouton ou qu'on fait 'Entrée',
           on déclenche la fonction qui va enregistrer la tâche. */
        <form onSubmit={handleSubmit}>
            {/* "value={title}" → Le texte affiché dans la case est lié à notre variable.
               "onChange" → À chaque lettre tapée (e), on met à jour la variable (setTitle).*/}
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre" />
            {/* Pareil pour la description. */}
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
            {/* Déclenche le formulaire */}
            <button type="submit">Valider</button>
        </form>
    );
}

export default AddTask;
