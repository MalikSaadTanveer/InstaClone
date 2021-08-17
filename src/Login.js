import React,{useState,useRef} from 'react'
import './Login.css'
import Logo from './instaLogo.png'
import FetchPosts from './FetchPosts.js'

const Login = () => {
    let admin = useRef();
    let password = useRef();
    let [error,setError] = useState(false);
    let [dashborad,setDashboard] = useState(false);
    let handleLogin = ()=>{
        let admins = admin.current.value;
        let pass = password.current.value;
        if(admins === '' || pass === '' || admins!=='maliksaad' || pass !== 'malik123'){
            setError(true);
        }
        else{
            setError(false);
            setDashboard(true)
        }
    }

    return (
    <div>
    <header>
        <img src={Logo} alt="" />
    </header>
        {dashborad ? <FetchPosts/> : 
        <div className="app_Login">
        {error && 
        <div className="error"> Please check the credentials carefully.</div>
        }
        <input type="text" placeholder="admin"  ref={admin}/>
        <input type="password" placeholder="Password" ref={password} />
        <button onClick={handleLogin}>Login</button>
        </div>
        }
    </div>
    )
}

export default Login
