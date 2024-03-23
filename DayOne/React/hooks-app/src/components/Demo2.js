import React, { useState,useEffect } from 'react';
import { TextField, Button, Card, CardHeader, CardContent } from '@mui/material';

const YourComponent = () => {
  const [users, setUsers] = useState([]);
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    localStorage.setItem('gfg',JSON.stringify(users));
    console.log('gfg');
  })

  const addUsers = (e) => {
    e.preventDefault();
    setUsers([...users, { uname, email }]);
    setUname('');
    setEmail('');
  };

  const deleteOne = (uname) => {
    setUsers(users.filter(user => user.uname !== uname));
  };

  return (
    <Card variant="outlined">
      <CardHeader title="User List" />
      <CardContent>
        {users.map((data) => (
          <div className="text-capitalize" key={data.uname}>
            {data.uname} --- {data.email} --- 
            <Button variant="contained" color="primary" onClick={() => deleteOne(data.uname)}>Delete</Button>
          </div>
        ))}
        <form onSubmit={addUsers}>
          <TextField
            label="Enter Username"
            variant="outlined"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Enter Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Add Users
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default YourComponent;
