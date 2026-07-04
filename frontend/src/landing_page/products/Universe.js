import React from 'react'

import {Link} from "react-router-dom";

function Universe() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='text-center'>
                    <h3 className='mt-5'>The Zerodha Universe</h3>
                </div>
                <div className='text-center text-muted mt-3'>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>

                <div className='row'>
                    <div className='col-4 p-3 mt-3'>
                        <img src='media\images\zerodhaFundhouse.png' style={{ width: "180px" }}/>
                        <p className='text-small text-muted text-center'>Our asset management venture <br/>
                            that is creating simple and transparent index<br/>
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='col-4 p-3 mt-3'>
                        <img src='media\images\sensibullLogo.svg' style={{ width: "180px" }}/>
                        <p className='text-small text-muted text-center'>Options trading platform that lets you <br/>
                            create strategies, analyze positions, and examine <br/>
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className='col-4 p-3 mt-3'>
                        <img src='media\images\tijori.svg' style={{ width: "180px" }}/>
                        <p className='text-small text-muted text-center'>Our asset management venture <br/>
                            that is creating simple and transparent index<br/>
                            funds to help you save for your goals.
                        </p>
                    </div>

                    <div className='col-4 p-3 mt-3'>
                        <img src='media\images\streakLogo.png' style={{ width: "180px" }}/>
                        <p className='text-small text-muted text-center'>Systematic trading platform <br/>
                            that allows you to create and backtest <br/>
                            strategies without coding.
                        </p>
                    </div>
                    <div className='col-4 p-3 mt-3'>
                        <img src='media\images\smallcaseLogo.png' style={{ width: "180px" }}/>
                        <p className='text-small text-muted text-center'> Thematic investing platform<br/>
                            that helps you invest in diversified<br/>
                            baskets of stocks on ETFs.

                        </p>
                    </div>
                    <div className='col-4 p-3 mt-3'>
                        <img src='media\images\dittoLogo.png' style={{ width: "180px" }}/>
                        <p className='text-small text-muted text-center'>Personalized advice on life<br/>
                            and health insurance. No spam<br/>
                            and no mis-selling.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col text-center">
                    <button className="btn btn-primary" style={{width: "150px", height: "45px", fontSize: "1.1rem"}}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Universe;