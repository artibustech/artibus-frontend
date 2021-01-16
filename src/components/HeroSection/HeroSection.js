import React from 'react'
import { Button } from '../button/Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img className="background-image" src="../../images/pexels-karolina-grabowska-4219653.jpg" alt="Craftperson crafting" />
            <h1>Adventure awaits</h1>
            <p>What are your waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
