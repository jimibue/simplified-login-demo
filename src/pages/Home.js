import React, { useContext } from "react";
import ToggleCard from "../components/ToggleCard";
import { AccountContext } from "../providers/AccountProvider";

const Home = ()=>{
    //consume the data from my provider
    const {user} = useContext(AccountContext)
    return (
        <div>
            <h1>Home Is visible to every one</h1>
            {user && <p>Welcome: {user.username}</p>}
            <ToggleCard title='card 1'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </ToggleCard>

            <ToggleCard title='card 2'>
                <div>
                    <h1>yo</h1>
                </div>
            </ToggleCard>
        </div>
    )
}

export default Home