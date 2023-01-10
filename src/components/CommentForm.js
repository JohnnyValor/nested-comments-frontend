import { useState } from "react"


export function CommentForm({ loading, error, onSubmit, autoFocus = false, initialValue = "", }) {
    const [message, setMessage] = useState(initialValue)

    // if comment change/commit successful, clear form
    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(message).then(() => setMessage(initialValue))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="comment-form-row">
                <textarea
                autoFocus={autoFocus}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="message-input"
                />
                <button
                    className="btn"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Loading" : "Post"}
                </button>
            </div>
            <div className="error-msg">{error}</div>
        </form>
    )
}