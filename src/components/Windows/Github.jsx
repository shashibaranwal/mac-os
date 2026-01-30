import React, { useState, useEffect } from "react";
import MacWindow from "./MacWindow";
import { getGithubData, getGithubRepos, getGithubProfileImg } from "../../apis/GithubApi";


const Github = () => {
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

  console.log(data);
  console.log(repos);

  return (
    <MacWindow default={{ x: 200, y: 200 }} 
        data={data} 
        repos={repos} 
        profileImg={getGithubProfileImg()}
    />
  );
};

export default Github;
