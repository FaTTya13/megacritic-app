import React, { useState, useEffect } from "react";
import UsersTable from "./UsersTable";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from 'universal-cookie';

const Users = (props) => {
    const [users, setUsers] = useState(props.users);
    const [loading, setLoading] = useState(true);
    const [isSync, setisSync] = useState(null)
    const [usersId, setUsersId] = useState([])
    // const [loggedUserId, setloggedUserId] = useState(null);
    const cookies = new Cookies();
    console.log(users)

    // useEffect(() => {
    //     setisSync(false)
    //     axios({
    //       method: 'GET',
    //       url: 'http://localhost:5000/users',
    //     })
    //     .then((response) => {
    //       if (response.data) {
    //         console.log(response.data)
    //         setUsers(response.data)
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("There was an error!", error);
    //     });  
    
    //   }, [isSync]);

    // const fetchUsers = async () => {
    //     try {
    //     const token = cookies.get("token");
    //     const headers = {
    //             Authorization: `Bearer ${token}`,
    //     };

    //     const response = await axios.post("http://localhost:5000/users", {}, {
    //         headers
    //       });
    //     console.log(response.data)
    //     setloggedUserId(response.data)
    //     //   setUsers(response.data);
    //     //   setLoading(false);
    //     } catch (error) {
    //       // Handle error
    //       console.error("Error fetching users:", error);
    //     //   setLoading(false);
    //     }
    //   };
    
    //   useEffect(() => {
    //     // Fetch users on component mount
    //     fetchUsers();
    //   }, []);
    
    const deleteUser = (usersId) => {   
        usersId.map(id => {
            axios({
                method: 'DELETE',
                url: `http://localhost:5000/users/${id}`,
                data: id
            }) 
        })
        if (usersId.includes(Number(cookies.get('token')))) {
            // window.location.reload();
            cookies.remove('token', { path: '/' });
            // props.setisLoggedIn(false);
        }
        setisSync(true);
    }

    // const blockUser = (usersId) => {   
    //     usersId.map(id => {
    //         axios({
    //             method: 'PUT',
    //             url: `http://localhost:5000/auth/users/${id}`,
    //             data: {
    //                 userstatus: 'blocked'
    //             }
    //         }) 
    //     })
    //     if (usersId.includes(Number(cookies.get('user-info')))) {
    //         // window.location.reload();
    //         cookies.remove('user-info', { path: '/' });
    //         // props.setisLoggedIn(false);
    //     }
    //     setisSync(true);
    // }

    // const unblockUser = (usersId) => {   
    //     usersId.map(id => {
    //         axios({
    //             method: 'PUT',
    //             url: `http://localhost:5000/auth/users/${id}`,
    //             data: {
    //                 userstatus: 'active'
    //             }
    //         }) 
    //     })
    //     setisSync(true);
    //     // props.setisLoggedIn(true);
    // }
    
    return (
    <>
    <h1 className="text-center">Users Panel</h1>
    {<div>
    {/* <Button variant="warning" className="mb-2 ms-2" type="button" onClick={() => blockUser(usersId)}>Block</Button> */}
    {/* <Button variant="primary" className="mb-2 ms-2" type="button" onClick={() => unblockUser(usersId)}>Unblock</Button> */}
    <Button variant="danger" className="mb-2 ms-2" type="button" onClick={() => deleteUser(usersId)}>Delete</Button>
    </div>}
    <UsersTable setUsersId={setUsersId} users={users} setisSync={setisSync}/>
    </>
    )
}

export default Users;