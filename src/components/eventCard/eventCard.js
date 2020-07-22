import React from "react"
import "./eventCard.css"

const EventCard = () => {
  return (
    <div className="card">
      <div className="card_left">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png" />
      </div>
      <div className="card_right">
        <h1>KILL BILL: VOL. 1</h1>
        <div className="card_right__details">
          <ul>
            <li>2003</li>
            <li>111 min</li>
            <li>Action</li>
          </ul>
          <div className="card_right__rating">
            <div className="card_right__rating__stars">
              <fieldset className="rating">
                <input
                  id="star10"
                  name="rating"
                  type="radio"
                  defaultValue={10}
                />
                <label className="full" htmlFor="star10" title="10 stars" />
                <input
                  id="star9half"
                  name="rating"
                  type="radio"
                  defaultValue="9 and a half"
                />
                <label className="half" htmlFor="star9half" title="9.5 stars" />
                <input id="star9" name="rating" type="radio" defaultValue={9} />
                <label className="full" htmlFor="star9" title="9 stars" />
                <input
                  id="star8half"
                  name="rating"
                  type="radio"
                  defaultValue="8 and a half"
                />
                <label className="half" htmlFor="star8half" title="8.5 stars" />
                <input id="star8" name="rating" type="radio" defaultValue={8} />
                <label className="full" htmlFor="star8" title="8 stars" />
                <input
                  id="star7half"
                  name="rating"
                  type="radio"
                  defaultValue="7 and a half"
                />
                <label className="half" htmlFor="star7half" title="7.5 stars" />
                <input id="star7" name="rating" type="radio" defaultValue={7} />
                <label className="full" htmlFor="star7" title="7 stars" />
                <input
                  id="star6half"
                  name="rating"
                  type="radio"
                  defaultValue="6 and a half"
                />
                <label className="half" htmlFor="star6half" title="6.5 stars" />
                <input id="star6" name="rating" type="radio" defaultValue={6} />
                <label className="full" htmlFor="star6" title="6 star" />
                <input
                  id="star5half"
                  name="rating"
                  type="radio"
                  defaultValue="5 and a half"
                />
                <label className="half" htmlFor="star5half" title="5.5 stars" />
                <input id="star5" name="rating" type="radio" defaultValue={5} />
                <label className="full" htmlFor="star5" title="5 stars" />
                <input
                  id="star4half"
                  name="rating"
                  type="radio"
                  defaultValue="4 and a half"
                />
                <label className="half" htmlFor="star4half" title="4.5 stars" />
                <input id="star4" name="rating" type="radio" defaultValue={4} />
                <label className="full" htmlFor="star4" title="4 stars" />
                <input
                  id="star3half"
                  name="rating"
                  type="radio"
                  defaultValue="3 and a half"
                />
                <label className="half" htmlFor="star3half" title="3.5 stars" />
                <input id="star3" name="rating" type="radio" defaultValue={3} />
                <label className="full" htmlFor="star3" title="3 stars" />
                <input
                  id="star2half"
                  name="rating"
                  type="radio"
                  defaultValue="2 and a half"
                />
                <label className="half" htmlFor="star2half" title="2.5 stars" />
                <input id="star2" name="rating" type="radio" defaultValue={2} />
                <label className="full" htmlFor="star2" title="2 stars" />
                <input
                  id="star1half"
                  name="rating"
                  type="radio"
                  defaultValue="1 and a half"
                />
                <label className="half" htmlFor="star1half" title="1.5 stars" />
                <input id="star1" name="rating" type="radio" defaultValue={1} />
                <label className="full" htmlFor="star1" title="1 star" />
                <input
                  id="starhalf"
                  name="rating"
                  type="radio"
                  defaultValue="half"
                />
                <label className="half" htmlFor="starhalf" title="0.5 stars" />
              </fieldset>
            </div>
          </div>
          <div className="card_right__review">
            <p>
              The lead character, called 'The Bride,' was a member <br /> of the
              Deadly Viper Assassination Squad, led by her <br /> lover 'Bill.'
              Upon realizing she was pregnant with Bill's
              <br /> child, 'The Bride' decided to escape her life as a killer.
              <br /> She fled to Texas, met a young man, who, on the day
              <br /> of their wedding rehearsal was gunned down by....
            </p>
            <a
              href="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
              target="_blank"
            >
              Read more
            </a>
          </div>
          <div className="card_right__button">
            <a
              href="https://www.youtube.com/watch?v=ot6C1ZKyiME"
              target="_blank"
            >
              WATCH TRAILER
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
