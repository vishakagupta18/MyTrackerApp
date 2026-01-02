import React from "react";
import {useNavigate} from 'react-router-dom';
import '../../styles/common.scss';
import './login.scss';

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <section className="et-app-bg flex-col login-wrapper">
                <span>Let's Login</span>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="button" className='primary-btn' value='Login' onClick={handleLogin}/>
                <span>Account not created ? <a>Register here</a></span>
            </section>
        </>
    )
}

export default Login