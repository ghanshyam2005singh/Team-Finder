import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/users/register", form);
    alert("Registered Successfully");
  };

  return (
    <div className="p-5">
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <input name="role" placeholder="Role (frontend/backend/designer)" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="skills" placeholder="Skills (comma-separated)" onChange={(e) => setForm({ ...form, skills: e.target.value.split(',') })} />
      <input name="hackathons" placeholder="Hackathons (comma-separated)" onChange={(e) => setForm({ ...form, hackathons: e.target.value.split(',') })} />
      <textarea name="bio" placeholder="Short Bio" onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
