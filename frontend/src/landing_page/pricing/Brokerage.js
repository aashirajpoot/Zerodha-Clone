import React from 'react'

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <div className='col-8 p-4'>
                    <a href='#' style={{textDecoration:"none"}} className='text-center mb-4'> <h4 >Brokerage calculator</h4> </a>
                    <ul>
                        <li>
                            Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href='#' style={{textDecoration:"none"}} className='text-center mb-3'> <h4>List of charges</h4> </a>
                </div>

                <div className='col p-5 mt-5 mb-3 text-center'>
                    <h1 className='fs-2 mb-3'>Open a Zerodha account</h1>
                    <p className='text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button type="button" class="btn btn-primary">Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;