import React from 'react'
import { Link } from 'react-router-dom'

function Locations(props) {
  return (
   <>
    <li className='card__location'>
        <Link className='card__location__link' to={props.path}>
        <figure className='card__event__pic-wrap'>
            <img
              className='card__event__img'
              alt='Film Poster'
              src={props.src}
            />
          </figure>
          <div className='card__location__info'>
            <h5 className='card__location__text'>{props.name}</h5>
            <h6 className='card__location__location'>{props.address}</h6>
            <p className='card__location__date'>{props.phone}</p>
          </div>
        </Link>
      </li>
   </>
  )
}

export default Locations
