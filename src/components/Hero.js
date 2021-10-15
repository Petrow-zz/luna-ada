import React from 'react'

//STYLE
import '../sass/components/Hero.scss'

function HeroSection() {
    return (
        <div className='hero'>
            <div className="hero__wrapper">
                <div className="hero__text">
                    Minőség & Gyorsaság
                </div>
                <div className="hero__title">Üdvözöljük weboldalunkon!</div>
                <div className="hero__btn btn">RÓLUNK</div>
            </div>
        </div>
    )
}

export default HeroSection
