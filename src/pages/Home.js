import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users/all");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>HackMate Users</h2>
      {users.map((user) => (
        <div key={user._id} className="border p-2">
          <h3>{user.name}</h3>
          <p>{user.role} | {user.location}</p>
          <p>Skills: {user.skills.join(", ")}</p>
          <p>Hackathons: {user.hackathons.join(", ")}</p>
          <p>{user.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
