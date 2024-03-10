import React, { useState } from "react";

export default function Demo2(props) {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");

  const addusers = (e) => {
    e.preventDefault();
    setUsers([...users, { uname, email }]);
  };

  const deleteOne = (uname) => {
        setUsers(users.filter((note) => note.uname !== uname))
  }

  return (
    <div >
      {users.map((data) => (
        <div className="text-capitalize"  key={data.uname}>
          {data.uname} --- {data.email} --- <button className="btn-primary" onClick={() => deleteOne(data.uname)} >Delete</button>
        </div>
      ))}
      <form className="card-header form-control" onSubmit={addusers}>
        <input
          className="card-body"
          type="text"
          placeholder="Enter Username"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <input
          className="card-body"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary">Add Users</button>
      </form>
    </div>
  );
}
