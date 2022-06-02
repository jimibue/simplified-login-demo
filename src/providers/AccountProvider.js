import React, { useState } from 'react'
// create context
export const AccountContext = React.createContext() 

const dummyUser = {username:'yoyofoo', membershipLevel:'gold', dateJoined:'june 12'} 

const AccountProvider = (props)=>{
    let [user, setUser] = useState(null)
    const login = ()=>{
        // api call here and send username password
        // backend would check if that is valid
        // if valid be would send us back a token '234523asdfasdf45'
        // send us back the user/account
        setUser(dummyUser)
    }

    const updateUser = (updatedUser)=>{
        // api call here and send data
        // and send token '234523asdfasdf45'
        setUser(updatedUser)
    }

    const logout = ()=>{
        setUser(null)
    }
    return (
        <AccountContext.Provider value={{user:user, updateUser, login, logout,otherValue:'yo'}}>
         {props.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider

