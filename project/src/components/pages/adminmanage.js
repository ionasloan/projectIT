import React from 'react';
import './about.css';

function Aboutus() {
  return (
    <div class="about">
        <h1>About</h1>
        <div class="image">
            <img src="./images/gff.jpg" alt="gff"/>
        </div>
        
        <h2>Glasgow is one of the friendliest film festivals on the planet with a wide-ranging programme 
            that celebrates every corner of world cinema and provides a fantastic showcase for the best of 
            Scottish film. The 2023 edition will take place from the 2nd tothe 23rd March from 
            our beloved Glasgow Film Theatre, at selected venues across the city, our online player 
            Glasgow Film At Home (GFAH), and in cinema venues across the UK.</h2>

            <div class="image">
            <img src="./images/gff2.jpg" alt="gff"/>
        </div>

        <h3>
            The Festival has a long tradition of championing new talent and ensuring that the very best
             films from the annual submissions are given a platform in the public programme. 2022 
             submissions that screened at the Festival included Lizzie MacKenzie's Audience Award 
             winning The Hermit of Treig.
        </h3>
    
    </div>
  );
}

export default Aboutus
