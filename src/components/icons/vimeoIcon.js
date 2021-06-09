import React from "react"
import PropTypes from "prop-types"

export const VimeoIcon = (props) => {
    return (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M20 0C8.95468 0 0 8.95427 0 20C0 31.0457 8.95468 40 20 40C31.0453 40 40 31.0457 40 20C40 8.95427 31.0453 0 20 0ZM34.1393 13.4199C34.0141 16.1755 32.0876 19.9505 28.3658 24.7411C24.5185 29.7453 21.262 32.2476 18.5968 32.2476C16.9481 32.2476 15.5523 30.7241 14.411 27.6755C13.6495 24.8818 12.8872 22.0894 12.126 19.2953C11.2802 16.2484 10.3718 14.7229 9.39949 14.7229C9.18834 14.7229 8.44604 15.1693 7.17708 16.0573L5.84634 14.3407C7.24215 13.1143 8.62077 11.8854 9.97647 10.6553C11.8404 9.04593 13.2383 8.19847 14.1717 8.11253C16.3744 7.90097 17.7305 9.40849 18.2396 12.6318C18.7896 16.1117 19.1697 18.276 19.3833 19.1223C20.018 22.0092 20.7173 23.4513 21.4793 23.4513C22.0722 23.4513 22.9635 22.5138 24.1494 20.6429C25.3344 18.7699 25.9695 17.3442 26.055 16.3675C26.224 14.7507 25.5885 13.9409 24.1494 13.9409C23.4709 13.9409 22.7716 14.0955 22.0538 14.4053C23.4447 9.84757 26.1029 7.63253 30.0268 7.75775C32.9363 7.84327 34.3067 9.73054 34.1393 13.4199Z"
                fill="currentColor"
            />
        </svg>
    )
}

VimeoIcon.defaultProps = {
    width: 40,
    height: 40,
}

VimeoIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}