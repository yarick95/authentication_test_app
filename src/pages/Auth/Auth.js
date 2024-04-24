import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthProvider';
import styles from './Auth.module.scss'

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false)

    const { createUser, loginUser, handleGoogleLogin, handleMicrosoftLogin } = useContext(AuthContext);

    const canSubmit = () => {
        if (isRegistered) {
            return email.length > 0 && password.length > 0; 
        }
        return email.length > 0 && password.length > 0 && name.length > 0; 
    };

    return (
        <div className={styles.container}>
            <div>
                {!isRegistered && <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />}
                <br />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                {isRegistered ? (
                    <button onClick={() => loginUser(email, password)} disabled={!canSubmit()}>Login</button>
                ) : (
                    <button onClick={() => createUser(email, password)} disabled={!canSubmit()}>Sign Up</button>
                )}
                <br />
                <p className={styles.authText} onClick={() => setIsRegistered(!isRegistered)}>
                    {isRegistered ? 'Need to create an account?' : 'Already have an account?'}
                </p>
            </div>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
            <button onClick={handleMicrosoftLogin}>Sign in with Microsoft</button>
        </div>
    )
}

export default Auth;
