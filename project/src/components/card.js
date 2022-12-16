import React from 'react';
import EventCard from './cardEvent';
import './cardEvent.css';

function Card() {
  return (
    <div className='card'>
        <h1 class="h1">Highlights Of The Festival</h1>
        <div className='card__container'>
        <div className='card__wrapper'>
            <ul className='card__event'>
                <EventCard 
                src="images/img-8.jpg" 
                title="Clueless"
                genre='Comedy'
                location='CCA'
                date='17th March'

                />
                <EventCard 
                src="images/img-3.jpg" 
                title="John Wick"
                genre='Action'
                location='Cineworld'
                date='6th March'
                />
                <EventCard 
                src="images/img-2.jpg" 
                title="Anchorman"
                genre='Comedy'
                location='Everyman'
                date='2nd March'
                />
            </ul>
        </div>
        </div>
    
    </div>
  );
}

export default Card