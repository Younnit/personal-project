import React, {useContext} from 'react'
import { UserContext } from "../context/UserContext";

function Info() {
    const {user} = useContext(UserContext)
    return (
        <div>
            <p>Info, {user.email}</p>
        </div>
    )
}

export default Info
