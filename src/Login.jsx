import React,{useState} from "react";
import './index.css';
import Mcq from './Mcq';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggenIn,setIsLoggedIn] = useState(false);  
    const verifyUser = (e)=>{
        e.preventDefault();
        if(email==="test@gmail.com" && password==="1234")
        setIsLoggedIn(true);
    }
    return (

        <>
        {(!isLoggenIn)?
        <>
        <div>
            email: test@gmail.com
            <br />
            password: 1234
        </div>
            <form action="">
                <input type="text"
                onChange={(e)=>setEmail(e.target.value)}
                 placeholder="Enter Your Email" name="email"/> <br />
                <input type="password"
                onChange={(e)=>setPassword(e.target.value)}
                 placeholder="Enter Your password" name="password"/> <br />
                <button onClick={verifyUser} >Submit</button>
            </form></>:<Mcq/>
            }
        </>
    );
}

export default Login;
