import React, {useContext} from 'react'
import { UserContext } from "../context/UserContext";

function Home() {
    const {user} = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <p>Hello, {user.email}</p>
        </div>
    )
}

export default Home
