// all buttons 
export function IconBtn({ Icon, isActive, color, children, ...props }) {
    console.log(children)
    return (
        // if button is active assign class, otherwise empty
        // if children is not null assign class, otherwise empty
        // spaces out icons and buttons from each other
        <button className={
            `btn icon-btn ${isActive ? "icon-btn-active" : ""} ${color || ""
            }`}
            {...props}
        >
            <span className={`${children != null ? "mr-1" : ""}`}>
                <Icon />
            </span>
            {children}
        </button>
    )
}