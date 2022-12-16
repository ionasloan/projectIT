import React from 'react';
import EventItem from './events';
import './admin.css';

function AdminEvent() {
  return (
    <div className='card'>
        <h1>Manage the Events</h1>
        <h3>Here you can create, edit or delete an event</h3>
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
                <EventItem 
                src="images/img-3.jpg" 
                title="John Wick"
                genre='Action'
                location='Cineworld'
                date='6th March'
                runningTime='134 minutes'
                plot='John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski and written by Derek Kolstad.'
                />
                <EventItem 
                src="images/img-2.jpg" 
                title="Anchorman"
                genre='Comedy'
                location='Everyman'
                date='2nd March'
                runningTime='122 minutes'
                plot='Anchorman: The Legend of Ron Burgundy is a 2004 American satirical comedy film directed by Adam McKay in his directorial debut.'
                />
            </ul>
            <ul className='card__event'>
                <EventItem 
                src="images/img-6.jpg" 
                title="White Chicks"
                genre='Comedy'
                location='Cineworld'
                date='20th March'
                runningTime='86 minutes'
                plot='White Chicks is a 2004 American comedy film directed by Keenen Ivory Wayans. It stars Shawn Wayans and Marlon Wayans as two FBI agents who go undercover.'
                />
                <EventItem 
                src="images/img-1.jpg" 
                title="Lord Of The Rings"
                genre='Horror'
                location='IMAX'
                date='10th March'
                runningTime='180 minutes'
                plot='The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien.'
                />
                <EventItem 
                src="images/img-4.jpg" 
                title="The Shinning"
                genre='Horror'
                location='Glasgow Film Theatre'
                date='13th March'
                runningTime='125 minutes'
                plot='The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson.

                '
                />
            </ul>
            <ul className='card__event'>
                <EventItem 
                src="images/img-5.jpg" 
                title="Star Wars"
                genre='Sci-Fi'
                location='Glasgow Film Theatre'
                date='19th March'
                runningTime='140 minutes'
                plot='Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977.'
                />
                <EventItem 
                src="images/img-9.jpg" 
                title="Pulp Fiction"
                genre='Drama'
                location='Glasgow Film Theatre'
                date='16th March'
                runningTime='150 minutes'
                plot='Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.'
                />
                <EventItem 
                src="images/img-7.jpg" 
                title="Anabelle"
                genre='Horror'
                location='Cineworld'
                date='8th March'
                runningTime='110 minutes'
                plot='Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti, written by Gary Dauberman and produced by Peter Safran and James Wan.

                '

                />
            </ul>
        </div>
        </div>
    
    </div>
  );
}

export default AdminEvent