// regex pulls userId from cookie, then sets to current user
// fake login
export function useUser() {
    return { id: document.cookie.match(/userId=(?<id>[^;]+);?$/).groups.id }
}