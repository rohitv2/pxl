import React from "react"
import PropTypes from "prop-types"

export const MoreVertIcon = (props) => {
    return (
        <svg width={2} height={8} viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1Z"
                fill="#010203"
            />
            <path
                d="M2 4C2 4.55228 1.55228 5 1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3C1.55228 3 2 3.44772 2 4Z"
                fill="#010203"
            />
            <path
                d="M2 7C2 7.55228 1.55228 8 1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6C1.55228 6 2 6.44772 2 7Z"
                fill="#010203"
            />
        </svg>
    )
}

MoreVertIcon.defaultProps = {
    width: 2,
    height: 8,
}

MoreVertIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
