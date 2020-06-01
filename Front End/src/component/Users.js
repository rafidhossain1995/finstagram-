import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from "../utility/apiURL"
export default function Users() {

    const [users, setUsers] = useState([]);
    const API = apiURL();
    useEffect(() => {
        const getAllUsers = async () => {     
                    let res = await axios({
                    method: "get", 
                    url: `${API}/users/all`
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