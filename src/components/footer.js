import React from "react"

const Footer = () => {
  return (
    <>
      <div
        className="section mt-6 mb-0 pt-5 pb-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="columns is-multiline is-vcentered is-centered is-mobile is-desktop is-tablet">
          <div className="column is-narrow is-half-tablet is-full-mobile is-one-quarter-desktop">
            <a
              target="_blank"
              href="https://die-stickmeister.de"
              className="sponsor-link"
            >
              <img
                className="sponsor-logo"
                src={`https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img,h_89/https://die-stickmeister.de/wp-content/uploads/2020/06/Stickmeisters_Logo_Solo_LightGray.png`}
                alt=""
              />
            </a>
          </div>

          <div className="column is-narrow is-half-tablet is-full-mobile is-one-quarter-desktop">
            <a
              target="_blank"
              href="https://die-stickmeister.de"
              className="sponsor-link"
            >
              <img
                className="sponsor-logo"
                src={`https://www.hausverwaltung-norman.de/wp-content/uploads/2020/03/Hausverw_Logo_Final.png`}
                alt=""
              />
            </a>
          </div>

          <div className="column is-narrow is-half-tablet is-full-mobile is-one-quarter-desktop">
            <a
              target="_blank"
              href="https://die-stickmeister.de"
              className="sponsor-link"
            >
              <img
                className="sponsor-logo"
                src={`https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img,h_89/https://die-stickmeister.de/wp-content/uploads/2020/06/Stickmeisters_Logo_Solo_LightGray.png`}
                alt=""
              />
            </a>
          </div>

          <div className="column is-narrow is-half-tablet is-full-mobile is-one-quarter-desktop">
            <a
              target="_blank"
              href="https://die-stickmeister.de"
              className="sponsor-link"
            >
              <img
                className="sponsor-logo"
                src={`https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img,h_89/https://die-stickmeister.de/wp-content/uploads/2020/06/Stickmeisters_Logo_Solo_LightGray.png`}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            &copy; {new Date().getFullYear()} - Built with &#10084; by Barry &
            Philipp in Munich
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
