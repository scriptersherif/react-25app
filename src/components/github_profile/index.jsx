import { useEffect, useState } from "react";
import React from "react";
import User from "./user.jsx";
import "./style.css";

function Github() {
  const [username, setUserName] = useState("scriptersherif");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
    console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }

  return (
    <div className="github-profile-finder">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Enter</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

export default Github;
