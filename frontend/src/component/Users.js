import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { apiURL } from "../utility/apiURL"
import {AuthContext} from "../providers/AuthContext"
export default function Users() {

    const [users, setUsers] = useState([]);
    const API = apiURL();
    const {token} = useContext(AuthContext)
    useEffect(() => {
        const getAllUsers = async () => {     
                    let res = await axios({
                    method: "get", 
                    url: `${API}/users/all`,
                    headers: {
                        'AuthToken': token
                    }
                })
            setUsers(res.data.users);
        }
        getAllUsers();
    }, [API])

    return(
        <div>
            <h1>All USERS MUST BE LOGGED IN TO VIEW</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.email}</li>
                })}
            </ul>
        </div>
    )
};