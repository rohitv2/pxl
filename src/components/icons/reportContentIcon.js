import React from "react"
import PropTypes from "prop-types"

export const ReportContentIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M11.8169 4.10811C11.8983 3.96396 12.1017 3.96396 12.1831 4.10811L20.9714 19.6757C21.0527 19.8198 20.951 20 20.7883 20L3.21173 20C3.04898 20 2.94727 19.8198 3.02864 19.6757L11.8169 4.10811Z"
                fill="black"
            />
            <path
                d="M11.5841 15.6005C11.5841 15.711 11.6736 15.8005 11.7841 15.8005H12.2755C12.386 15.8005 12.4755 15.711 12.4755 15.6005V11.2C12.4755 11.0895 12.386 11 12.2755 11H11.7841C11.6736 11 11.5841 11.0895 11.5841 11.2V15.6005ZM12.0298 17.7236C12.029 17.7229 12.0296 17.7215 12.0307 17.7215C12.201 17.7208 12.3465 17.6581 12.4713 17.5374C12.5969 17.416 12.6597 17.2737 12.6597 17.1063C12.6597 16.9389 12.5969 16.7966 12.4755 16.6752C12.3541 16.5539 12.2077 16.4953 12.0361 16.4953C11.8645 16.4953 11.7138 16.5539 11.5882 16.6752C11.4627 16.7966 11.3999 16.9389 11.3999 17.1063C11.3999 17.2737 11.4627 17.4202 11.5841 17.5416C11.7047 17.6623 11.8544 17.725 12.0289 17.7257C12.03 17.7257 12.0306 17.7244 12.0298 17.7236Z"
                fill="white"
            />
        </svg>
    )
}
ReportContentIcon.defaultProps = {
    height: 24,
    width: 24,
}
ReportContentIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}
