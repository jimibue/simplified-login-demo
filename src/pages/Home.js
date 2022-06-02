import React, { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";

const Home = ()=>{
    //consume the data from my provider
    const {user} = useContext(AccountContext)
    return (
        <div>
            <h1>Home Is visible to every one</h1>
            {user && <p>Welcome: {user.username}</p>}
        </div>
    )
}

export default Home