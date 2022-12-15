import React from 'react';
import {Button} from './button';
import './main.css';
import '../App'

function Main() {
  return (
    <div className='main-container'>
        <video src='videos/video-1.jpg' autoPlay loop muted/>
        <h1>Join us this March!</h1>
        <p>Running March 2nd - March 23rd</p>
        <div className='main-btns'>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>All Events</Button>
        </div>
    </div>
  )
}

export default Main