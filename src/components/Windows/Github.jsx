import React, { useState, useEffect } from "react";
import MacWindow from "./MacWindow";
import { getGithubData, getGithubRepos } from "../../apis/GithubApi";

const Github = (props) => {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getGithubData().then((res) => {
      setData(res);
    });
    getGithubRepos().then((res) => {
      setRepos(res);
    });
  }, []);

  // console.log(data);
  // console.log(repos);

  const [zIndex, setZIndex] = useState(null);

  const handleZIndex = () => {
    setZIndex(zIndex + 1);
  }

  return (
    <MacWindow
      default={{ x: 100, y: 100, width: 400, height: 250 }}
      title={data.login || "Github"}
      onClick={handleZIndex}
      style={{ zIndex }}
    >
      <div className="profile">
        <img src={data.avatar_url} />
        <div>
          <h3>{data.name}</h3>
          <p>
            <em>{data.login}</em>
          </p>
        </div>
      </div>
      <p>
        <em>Bio: </em>
        {data.bio}
      </p>
      <div>
        <em>Public repositories: </em>
        {repos.length}
      </div>
      <div className="repos">
        {repos.map((repo) => (
          <div key={repo.id} className="repo">
            <a href={repo.html_url}>{repo.name}</a>
          </div>
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;
