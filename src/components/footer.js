import React from "react"

const Footer = () => {
  return (
    <>
      <div
        className="section mt-6 mb-0 pt-5 pb-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="columns is-multiline is-vcentered is-centered is-mobile is-desktop is-tablet">
          <h5 class="subtitle is-5 mt-3">Sponsoren</h5>
        </div>

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
              href="https://www.lab-2000.de"
              className="sponsor-link"
            >
              <img
                className="sponsor-logo"
                src={`data:image/jpeg;base64,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`}
                alt=""
              />
            </a>
          </div>

          <div className="column is-narrow is-half-tablet is-full-mobile is-one-quarter-desktop">
            <a
              target="_blank"
              href="https://www.hausverwaltung-norman.de"
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
              href="https://a-complex-world.com/"
              className="sponsor-link"
            >
              <img
                className="sponsor-logo"
                src={`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzEyMTMxMDt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ5LjUsMTA5LjZsLTMuMiw2LjloLTUuOEw1Ni44LDgybDE2LjMsMzQuNmgtNS44bC0zLjItNi45SDQ5LjV6IE01Ni44LDkzLjZsLTUuMiwxMS4zSDYyTDU2LjgsOTMuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTA2LjksMTEwLjRjLTMuMyw0LjYtOC41LDYuOS0xMy44LDYuOWMtMTEuNSwwLTE2LjMtOC41LTE2LjMtMTcuNWMwLTExLjEsNi42LTE3LjUsMTYuMy0xNy41CgkJCWM1LjMsMCwxMC42LDIuMywxMy44LDYuOGwtNC4xLDMuNGMtMS45LTIuOS02LTUuMS05LjYtNS4xYy03LjMsMC0xMC42LDQuOS0xMC42LDEyLjRjMCw3LjUsMy40LDEyLjQsMTAuNiwxMi40CgkJCWMzLjQsMCw3LjYtMi4yLDkuNi01LjFMMTA2LjksMTEwLjR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzNS43LDk0LjhsLTkuOCwyMy4ybC0xNC0zNS4xaDUuOWw4LjQsMjEuOWw5LjUtMjIuNWw5LjUsMjIuNWw4LjQtMjEuOWg1LjlsLTE0LDM1LjFMMTM1LjcsOTQuOHoiLz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDAsN2M1MS4zLDAsOTMsNDEuNyw5Myw5M3MtNDEuNyw5My05Myw5M1M3LDE1MS4zLDcsMTAwUzQ4LjcsNywxMDAsNyBNMTAwLDBDNDQuOCwwLDAsNDQuOCwwLDEwMAoJCWMwLDU1LjIsNDQuOCwxMDAsMTAwLDEwMGM1NS4yLDAsMTAwLTQ0LjgsMTAwLTEwMEMyMDAsNDQuOCwxNTUuMiwwLDEwMCwwTDEwMCwweiIvPgo8L2c+Cjwvc3ZnPgo=`}
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
