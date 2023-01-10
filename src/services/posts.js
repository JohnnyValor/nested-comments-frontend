import { makeRequest } from "./makerequest";

// all posts
export function getPosts() {
    return makeRequest("/posts")
}

// single post :id
export function getPost(id) {
    return makeRequest(`/posts/${id}`)
}