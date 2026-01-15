import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ fontSize: '72px', color: '#ff4757' }}>404</h1>
            <h2>Oups ! La page que vous cherchez n'existe pas.</h2>

            {/* "Link to=" ramène l'utilisateur à la page d'accueil sans recharger le site. */}
            <Link to="/" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#2f3542',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
            }}>
                Retourner à l'accueil
            </Link>
        </div>
    );
}

export default NotFound;