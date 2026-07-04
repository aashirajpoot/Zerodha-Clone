import React from 'react'

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <h1 className='fs-3 text-center text-muted'>People</h1>
                <div className='col-6 mb-5 mt-5 text-center text-muted'>
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"50%"}}/>
                    <h5 className='mt-5'>Nikhil Kamath</h5>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-6 mb-5 mt-5' style={{fontSize:"1.5rm", lineHeight:"2"}}>
                    <div>
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p>
                            Connect on 
                            <a href="/" style={{textDecoration:"none"}}> Homepage</a> / 
                            <a href="/" style={{textDecoration:"none"}}> TradingQnA</a> /
                            <a href="/" style={{textDecoration:"none"}}> Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;