import React from 'react'

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row'>
                <div className='col text-center p-4 mt-5 mb-5'>
                    <h3 className='mb-3'>Zerodha Products</h3>
                    <h4 className='mb-3 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
                    <p className='mt-3'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings 
                        <i class="fa fa-long-arrow-right" aria-hidden="true"> </i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Hero;