import React from 'react';
import EventCard from './cardEvent';
import './cardEvent.css';

function Card() {
  return (
    <div className='card'>
        <h1>Check Out Our Uncoming Events</h1>
        <div className='card__container'>
        <div className='card__wrapper'>
            <ul className='card__event'>
                <EventCard 
                src="images/img-9.jpg" 
                text="Aftersun"
                label='Adventure'
                path='/locations'
                location='Glasgow Film Theatre'
                date='20th March'
                />
                <EventCard 
                src="images/img-3.jpg" 
                text="Avatar"
                label='Horror'
                path='/locations'
                location='Cineworld'
                date='6th March'
                />
                <EventCard 
                src="images/img-2.jpg" 
                text="Finding Nemo"
                label='Drama'
                path='/locations'
                location='IMAX'
                date='2nd March'
                />
            </ul>
        </div>
        </div>
    
    </div>
  );
}

export default Card