import React from 'react'
import { Link } from 'react-router-dom'

function EventItem(props) {
  return (
   <>
   {/* info on the events card */}
    <li className='card__event'>
        <Link className='card__event__link'>
          <figure className='card__event__pic-wrap' data-category={props.genre}>
            <img
              className='card__event__img'
              alt='Film Poster'
              src={props.src}
            />
          </figure>
          <div className='card__event__info'>
            <h5 className='card__event__text'>{props.title}</h5>
            <h6 className='card__event__location'>{props.location}</h6>
            <p className='card__event__date'>{props.date}</p>
            <p className='card__event__running'>{props.runningTime}</p>
            <p className='card__event__plot'>{props.plot}</p>
          </div>
        </Link>
      </li>
   </>
  )
}

export default EventItem