import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../../styles/common.scss';
import './login.scss';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if(username === 'employee' && password === 'emp') {
            navigate('/dashboard');
        } else {
            setError('Invalid username or password');
        }
    }

    return (
        <>
            <section className="et-app-bg flex-col login-wrapper">
                <span>Let's Login</span>
                <form onSubmit={handleLogin} className="flex-col">
                    <input type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" className='primary-btn' value='Login'/>
                 {error && <p className="form-error">{error}</p>}
                </form>
                <span>Account not created ? <a>Register here</a></span>
            </section>
        </>
    )
}

export default Login