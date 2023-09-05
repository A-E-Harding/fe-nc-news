import axios from "axios";

const baseURL = "https://nc-news-0876.onrender.com/api"

export function getAllArticles() {
    return axios.get(baseURL+'/articles')
}

export function getArticleById(article_id) {
    return axios.get(baseURL+`/articles/${article_id}`)
}

export function getCommentsByArticleId(article_id) {
    return axios.get(baseURL+`/articles/${article_id}/comments`)
}