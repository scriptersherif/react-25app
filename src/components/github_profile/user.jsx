import React from "react";

function User({ user }) {
  const { avatar_url, followers, following, public_repos, url, name, login } =
    user;
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="avatar" />
      </div>
      <div className="user-details">
        <h2>{name}</h2>
        <p>Username: {login}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repos: {public_repos}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Visit Github Profile
        </a>
      </div>
    </div>
  );
}

export default User;
