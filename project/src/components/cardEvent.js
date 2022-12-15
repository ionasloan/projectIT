import React from 'react'
import { Link } from 'react-router-dom'

function EventCard(props) {
  return (
   <>
    <li className='card__event'>
        <Link className='card__event__link' to={props.path}>
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
          </div>
        </Link>
      </li>
   </>
  )
}

export default EventCard