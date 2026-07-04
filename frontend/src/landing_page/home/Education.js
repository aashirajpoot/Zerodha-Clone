import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5 p-5'>
                    <img src='media/images/education.svg' style={{width:"30rem"}}/>
                </div>
                <div className='col-6 mt-5 p-5'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from basics to advanced trading.</p>
                    <a href='https://www.versity.com/' style={{textDecoration:"none"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='https://tradingqna.com/' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;