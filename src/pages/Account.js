import React, { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";

const Account = ()=>{
    //consume the data from my provider
    const {user} = useContext(AccountContext)
    return (
        <div>
            <h1>Account Is visible only if user logged in</h1>
            {user && <p>Welcome: {user.username}</p>}
        </div>
    )
}

export default Account