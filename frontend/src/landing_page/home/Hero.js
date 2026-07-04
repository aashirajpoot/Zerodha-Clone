import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5' >
            <div className='row text-center'>
                <div className='col'>
                    <img src='media/images/homeHero.png' alt='Hero Image' class="img-fluid"></img>
                    <h1 className='mt-5 fs-2'> Invest in everything </h1>
                    <p className='fs-4'> Online platform to invest in stocks, derivatives, mutual funds, and more.</p>
                    <button type="button" class="btn btn-primary">Signup Now</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;