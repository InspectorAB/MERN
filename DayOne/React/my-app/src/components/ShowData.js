import React from "react";

export default function ShowData(props) {
  return (
    <div>
      <ul>
        {props.sdata.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong>{" "}
            {user.email},<strong>UserName:</strong> {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
