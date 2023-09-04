import axios from "axios";

const baseURL = "https://nc-news-0876.onrender.com/api"

export function getAllArticles() {
    return axios.get(baseURL+'/articles')
}