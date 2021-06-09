import React from "react"
import PropTypes from "prop-types"

const EyeOpenIcon = (props) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1516 11.9829C18.4772 8.1236 15.1629 6.32954 11.9829 6.32954C8.80288 6.32954 5.48862 8.1236 2.8142 11.9829C5.48862 15.8422 8.80288 17.6363 11.9829 17.6363C15.1629 17.6363 18.4772 15.8422 21.1516 11.9829ZM22.3545 11.9829C16.6264 3.11175 7.33938 3.11175 1.61129 11.9829C7.33938 20.8541 16.6264 20.8541 22.3545 11.9829Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.962 14.6503C13.4355 14.6503 14.6299 13.4558 14.6299 11.9823C14.6299 10.5089 13.4355 9.31439 11.962 9.31439C10.4885 9.31439 9.29407 10.5089 9.29407 11.9823C9.29407 13.4558 10.4885 14.6503 11.962 14.6503ZM11.962 15.6503C13.9877 15.6503 15.6299 14.0081 15.6299 11.9823C15.6299 9.95658 13.9877 8.31439 11.962 8.31439C9.93626 8.31439 8.29407 9.95658 8.29407 11.9823C8.29407 14.0081 9.93626 15.6503 11.962 15.6503Z"
                fill="currentColor"
            />
        </svg>
    )
}

EyeOpenIcon.defaultProps = {
    width: 24,
    height: 24,
}

EyeOpenIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default EyeOpenIcon
