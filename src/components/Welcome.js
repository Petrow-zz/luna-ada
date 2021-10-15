import React from 'react'
import firstImage from '../images/gallery_1.jpg'
import secondImage from '../images/gallery_2.jpg'

//STYLE
import '../sass/components/Welcome.scss'

function Welcome() {
    return (
        <div className='welcome'>
            <div className="page-wrapper">
                <div className="welcome__content">
                    <div className="welcome__content-subtitle">Minőség & Gyorsaság</div>
                    <div className="welcome__content-title">Luna <span>Hamburgerija</span></div>
                    <div className="welcome__content-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nam, fuga inventore consequatur suscipit rem nobis vitae 
                            quas dolorem. Officia provident facilis assumenda distinctio 
                            facere dicta ab quibusdam odio sunt eaque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nam, fuga inventore consequatur suscipit rem nobis vitae 
                            quas dolorem. Officia provident facilis assumenda distinctio 
                            facere dicta ab quibusdam odio sunt eaque.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nam, fuga inventore consequatur suscipit rem nobis vitae 
                            quas dolorem. Officia provident facilis assumenda distinctio 
                            facere dicta ab quibusdam odio sunt eaque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nam, fuga inventore consequatur suscipit rem nobis vitae 
                            quas dolorem.
                        </p>
                    </div>
                </div>
                <div className="welcome__images">
                    <img src={firstImage} alt="Foo eating a sandwich." />
                    <img src={secondImage} alt="Foo eating a sandwich." />
                </div>
            </div>
        </div>
    )
}

export default Welcome
