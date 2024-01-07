import React, { useState } from "react";
import "./GitInfoCard.css";
function GitInfoCard() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUserData(data);
  };

  return (
    <div className="Deshboard">
      <form onSubmit={handleFormSubmit} className="GitInfoCard">
        <h1>Git Info Card</h1>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Enter User Name"
        ></input>
        <button type="submit"><p>Git Info Card</p></button>
        </form>
        {userData && (
          <>
            <div className="UserData">
              <img src={userData.avatar_url} alt="Avatar" />
              <h2>{userData.login}</h2>
              <p>
                {userData.name
                  ? `Name: ${userData.name}`
                  : "Name: Not available"}
              </p>
              <p>Public Repositories: {userData.public_repos}</p>
              <p>Public Gists: {userData.public_gists}</p>
              <p>Profile Created At: {userData.created_at}</p>
            </div>
          </>
        )}
    </div>
  );
}

export default GitInfoCard;
