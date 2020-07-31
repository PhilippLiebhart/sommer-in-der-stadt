import React, { useEffect, useState } from "react"
import "./scrollToTopButton.scss"

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)
  const scrollToTopButton = require("../../images/scrollToTop.png")

  useEffect(() => {
    document.addEventListener("scroll", e => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className="scroll-to-top"
      style={{ display: showButton ? "block" : "none" }}
      onClick={() => scrollToTop()}
    >
      <img src={scrollToTopButton} width={"50px"} height={"50px"} />
    </div>
  )
}

export default ScrollToTopButton
