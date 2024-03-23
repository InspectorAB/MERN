import React, {  useEffect,useState } from 'react'
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users";

const RestApp2 = () => {

    const [user,setUsers] = useState([]);

    useEffect(() => {
        axios
        .get(URL)
        .then(response => response.data)
        .then(data => {
          setUsers(data);
            console.log(data);
        });
    },[setUsers])

    return (
        <div>RestApp</div>
      )
}

export default RestApp2; 

