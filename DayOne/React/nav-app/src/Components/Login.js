import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({})
    
    const Navigate = useNavigate();
    const IsLogin = localStorage.setItem('IsLogin',false);
    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);

    }
    const addUser = (e) => {
        e.preventDefault()
        const userData = localStorage.getItem('gfg')
        const data = JSON.parse(userData)
        console.log(data);
        if(data.uname === formData.uname &&
            data.email === formData.email){
            localStorage.setItem('IsLogin',true);
            Navigate('/Portfolio')
        }else{
            Navigate('/Registration')
        }
        
      
    }

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={handleData}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleData}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
