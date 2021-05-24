import { Button, Spinner } from 'react-bootstrap';

// import styles from './styles/Login.module.css';

export default function Login({ loading, handleLogin }) {
    return (
        <div className="container">
            <h2>Welcome to Weight Tracker</h2>
            <p>Login to use it.</p>
            <Button
            variant="primary"
            disabled={loading}
            onClick={handleLogin}
            >
            { loading ? <Spinner animation="border" size="sm" /> : "Login" }
            </Button>  
        </div>
    );
}