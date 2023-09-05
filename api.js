import axios from "axios";

const baseURL = "https://nc-news-0876.onrender.com/api";

export function getAllArticles() {
  return axios.get(baseURL + "/articles");
}

export function getArticleById(article_id) {
  return axios.get(baseURL + `/articles/${article_id}`);
}

export function getCommentsByArticleId(article_id) {
  return axios.get(baseURL + `/articles/${article_id}/comments`);
}

export function updateVotes(article_id) {
  return axios.patch(baseURL + `/articles/${article_id}`, { inc_votes: 1 });
}

export function decreaseVotes(article_id) {
    return axios.patch(baseURL + `/articles/${article_id}`, { inc_votes: -1 });
  }
