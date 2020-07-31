import React from "react"

const Footer = () => {
  return (
    <footer className="footer mt-6">
      <div className="content has-text-centered">
        <p>
          &copy; {new Date().getFullYear()} - Built with &#10084; by BarPhi in
          Munich
        </p>
      </div>
    </footer>
  )
}

export default Footer
