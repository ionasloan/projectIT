import React from 'react';
import Locations from './cardLocation.js';
import './location.css';

function Location() {
  return (
    <div className='card'>
        <h1>Our Locations</h1>
        <div className='card__container'>
        <div className='card__wrapper'>
            <ul className='card__location'>
                <Locations
                src="images/cineworld.jpg" 
                name="Cineworld"
                address='7 Renfrew St, Glasgow G2 3AB'
                phone='03303 334444'
                />
                <Locations
                src="images/imax.jpg" 
                name="IMAX"
                address='7 Renfrew St, Glasgow G2 3AB'
                phone='03303 334444'
                />
            </ul>
            <ul className='card__location'>
                <Locations
                src="images/filmtheatre.jpg" 
                name="Glasgow Film Theatre"
                address='12 Rose St, Glasgow G3 6RB'
                phone='0141 3326535'
                />
                <Locations
                src="images/everyman.jpg" 
                name="Everyman"
                address='Unit 3 - 5, Princes square, Buchanan St, Glasgow G1 3JN'
                phone='0872 4369060'
                />
            </ul>
            <ul className='card__location'>
                <Locations
                src="images/cca.jpg" 
                name="CCA"
                address='350 Sauchiehall St, Glasgow G2 3JD'
                phone='0141 3524900'
                />
                <Locations
                src="images/grovsner.jpg" 
                name="Grovsner"
                address='24 Ashton Ln, Hillhead, Glasgow G12 8SJ'
                phone='0141 3398444'
                />
            </ul>
        </div>
        </div>
    
    </div>
  );
}

export default Location

{/* <div className='card__location__info'>
            <h5 className='card__location__text'>{props.name}</h5>
            <h6 className='card__location__location'>{props.address}</h6>
            <p className='card__location__date'>{props.phone}</p>
            <p className='card__location__running'>{props.website}</p>
           
          </div> */}