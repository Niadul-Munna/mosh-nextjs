import React from "react";
interface User {
  id: number;
  name: string;
}

const Userpage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Userpage;
