import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../providers/AccountProvider";

const LoginButton = ()=>{
    //consume the data from my provider
    const {login} = useContext(AccountContext)
    const navigate = useNavigate()

    const handleLogin = ()=>{
        login()
        navigate('/account')
    }
    return  <button onClick={handleLogin}>login</button>
        
}

export default LoginButton