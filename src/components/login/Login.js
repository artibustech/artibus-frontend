import React, {useState} from 'react'
import Axios from "axios"

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [loginStatus, setLoginStatus] = useState(false);

    // handle button click of login form
    const url = "http://localhost:3434";

    const handleLogin = () => {
        Axios.post(url, {
            username: username,
            password: password,
        }).then((response) => {
            if(!response.data.auth) {
                setLoginStatus(false);
            } else {
                localStorage.setItem("token", response.data.token);
                setLoginStatus(true);
            }
        });
    }

    return (
        <div>
            Login<br /><br />
            <div>
                Username<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;
