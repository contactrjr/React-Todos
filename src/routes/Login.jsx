import { useState } from 'react';
import { useAuthContext } from '@/context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import styles from '@/styles/Login.module.css'

const Login = () => {

    const [userName, setUserName] = useState('');
    const {login} = useAuthContext();
    const navigate = useNavigate();
    const loc = useLocation();
    console.log("Location:",loc);
    const from = loc.state?.pathname || '/';

    const HandleChange = (e) => {
        
        setUserName(e.target.value)
    };
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(!userName)
            return;
        login(userName);
        setUserName('');
        console.log("User Name:", userName);
        //navigate('/',{replace : true});
        console.log("From loc:", from);
        navigate(from, {replace: true});
    };
    return (
    <div>
    <form onSubmit={HandleSubmit}>
        <Header>
        <h2>Login Page....</h2>
        </Header>
        <input type="text"
            placeholder="Enter User Name..."
            value={userName}
            onChange={HandleChange}
            />
        
        <button> Login </button>

    </form>
    </div>
    );
};

export default Login;
