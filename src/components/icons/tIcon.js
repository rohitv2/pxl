import React from "react"
import PropTypes from "prop-types"

export const TIcon = (props) => {
    return (
        <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z"
                fill="#010203"
            />
            <path
                d="M46.8789 32.4336V36.376H46.4922C46.263 35.4665 46.0088 34.8148 45.7295 34.4209C45.4502 34.0199 45.0671 33.7012 44.5801 33.4648C44.3079 33.3359 43.8317 33.2715 43.1514 33.2715H42.0664V44.5078C42.0664 45.2526 42.1058 45.7181 42.1846 45.9043C42.2705 46.0905 42.4316 46.2552 42.668 46.3984C42.9115 46.5345 43.2409 46.6025 43.6562 46.6025H44.1396V47H36.5127V46.6025H36.9961C37.4186 46.6025 37.7588 46.5273 38.0166 46.377C38.2028 46.2767 38.3496 46.1048 38.457 45.8613C38.5358 45.6895 38.5752 45.2383 38.5752 44.5078V33.2715H37.5225C36.5413 33.2715 35.8288 33.4792 35.3848 33.8945C34.7617 34.4746 34.3678 35.3018 34.2031 36.376H33.7949V32.4336H46.8789Z"
                fill="currentColor"
            />
            <path
                d="M46.8789 32.4336V36.376H46.4922C46.263 35.4665 46.0088 34.8148 45.7295 34.4209C45.4502 34.0199 45.0671 33.7012 44.5801 33.4648C44.3079 33.3359 43.8317 33.2715 43.1514 33.2715H42.0664V44.5078C42.0664 45.2526 42.1058 45.7181 42.1846 45.9043C42.2705 46.0905 42.4316 46.2552 42.668 46.3984C42.9115 46.5345 43.2409 46.6025 43.6562 46.6025H44.1396V47H36.5127V46.6025H36.9961C37.4186 46.6025 37.7588 46.5273 38.0166 46.377C38.2028 46.2767 38.3496 46.1048 38.457 45.8613C38.5358 45.6895 38.5752 45.2383 38.5752 44.5078V33.2715H37.5225C36.5413 33.2715 35.8288 33.4792 35.3848 33.8945C34.7617 34.4746 34.3678 35.3018 34.2031 36.376H33.7949V32.4336H46.8789Z"
                fill="currentColor"
            />
        </svg>
    )
}
TIcon.defaultProps = {
    width: 80,
    height: 80,
}

TIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}