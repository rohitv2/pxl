import React from "react"
import PropTypes from "prop-types"

export const FacebookIcon = (props) => {
    return (
        <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M36 18C36 8.05781 27.9422 0 18 0C8.05781 0 0 8.05781 0 18C0 27.9422 8.05781 36 18 36C18.1055 36 18.2109 36 18.3164 35.993V21.9867H14.4492V17.4797H18.3164V14.1609C18.3164 10.3148 20.6648 8.21953 24.0961 8.21953C25.7414 8.21953 27.1547 8.33906 27.5625 8.39531V12.4172H25.2C23.3367 12.4172 22.9711 13.3031 22.9711 14.6039V17.4727H27.4359L26.8523 21.9797H22.9711V35.3039C30.4945 33.1453 36 26.2195 36 18Z"
                fill="currentColor"
            />
        </svg>
    )
}
FacebookIcon.defaultProps = {
    width: 36,
    height: 36,
}

FacebookIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}
