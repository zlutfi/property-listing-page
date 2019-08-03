import React from "react"

const Divider = ({ bottom = "", top = "", className = "" }) => (
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   preserveAspectRatio="none"
  //   viewBox="0 0 1600 100"
  // >
  //   <path fill={bottom} d="M0 0H1600V100H0z" />
  //   <path fill={top} d="M800 100L0 0h1600z" />
  // </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    width="100%"
    //height="100"
    viewBox="0 0 1600 100"
    className={className}
  >
    <rect fill={bottom} width="1600" height="100" />
    <path fill={top} d="M1600 100 0 0 1600 0Z" />
  </svg>
)
export default Divider
