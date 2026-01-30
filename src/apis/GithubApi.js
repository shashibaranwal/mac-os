import axios from "axios";

export const getGithubData = async () => {
    const response = await axios.get("https://api.github.com/users/shashibaranwal");
    return response.data;
}

export const getGithubRepos = async () => {
    const response = await axios.get("https://api.github.com/users/shashibaranwal/repos");
    return response.data;
}

export const getGithubProfileImg = async () => {
    const response = await axios.get("https://api.github.com/users/shashibaranwal");
    return response.data.avatar_url;
}