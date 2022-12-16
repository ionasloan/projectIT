import React from 'react';
import EventItem from './events';
import './location.css';

function Location() {
  return (
    <div className='card'>
        <h1>Our Events</h1>
        <div className='card__container'>
        <div className='card__wrapper'>
            <ul className='card__event'>
                <EventItem 
                src="images/img-8.jpg" 
                title="Clueless"
                genre='Comedy'
                location='CCA'
                date='17th March'
                runningTime='95 minutes'
                plot='Clueless is a 1995 American coming-of-age teen comedy film written and directed by Amy Heckerling.'
                />
            </ul>
        </div>
        </div>
    
    </div>
  );
}

export default Location