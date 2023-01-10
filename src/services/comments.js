import { makeRequest } from "./makerequest";

// create comment
export function createComment({ postId, message, parentId }) {
    return makeRequest(`posts/${postId}/comments`, {
        method: "POST",
        data: { message, parentId },
    })
}

// update comment
export function updateComment({ postId, message, id }) {
    return makeRequest(`posts/${postId}/comments/${id}`, {
        method: "PUT",
        data: { message },
    })
}

// delete comment
export function deleteComment({ postId, id }) {
    return makeRequest(`posts/${postId}/comments/${id}`, {
        method: "DELETE",
    })
}

export function toggleCommentLike({ id, postId }) {
    return makeRequest(`/posts/${postId}/comments/${id}/toggleLike`, {
        method: "POST",
    })
}