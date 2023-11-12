import React, { useState } from "react";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};
  return;
  <div>
    <input
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e) => e.target.value}
    />
    <input
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => e.target.value}
    />
    <button onClick={handleRegister}>Register</button>
  </div>;
};

export default signin;
