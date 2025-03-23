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
      <h1>Users List</h1>
      <ul className="bg-blue-300 ">
        {user.map((user) => (
          <li
            className="p-2 text-black list-decimal list-inside odd:bg-white odd:text-black hover:-translate-x-1 duration-200"
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userpage;
