import React from 'react'

function CraeteTicket() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-8'>
                    
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item mb-3 border">
                        <h2 class="accordion-header">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h5>Account Opening</h5>
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body p-3">
                            <ul> 
                                <li> <a href='#' style={{textDecoration:"none"}}> Resident individual </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Minor </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Non Resident Indian(NRI) </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Company, Partnership, HUF and LLP </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Glossary </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item mb-3 border">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h5>Your Zerodha Account</h5>
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <ul> 
                                <li> <a href='#' style={{textDecoration:"none"}}> Your profile </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Account modification </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Client Master Report (CMR) and Depository Participant (DP) </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Nomination </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Transfer and conversion of securities </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item mb-3 border">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h5>Kite</h5>
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <ul> 
                                <li> <a href='#' style={{textDecoration:"none"}}> IPO </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Trading FAQs </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Margin Trading Facility (MTF) and Margins </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Charts and orders </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Alerts and Nudges </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> General </a></li>
                            </ul>
                        </div>
                      </div>
                    </div>

                      <div class="accordion-item mb-3 border">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <h5>Funds</h5>
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <ul> 
                                <li> <a href='#' style={{textDecoration:"none"}}> Add money </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Withdraw money </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Add bank accounts </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> eMandates </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item mb-3 border">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <h5>Console</h5>
                          </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <ul> 
                                <li> <a href='#' style={{textDecoration:"none"}}> Portfolio </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Corporate actions </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Funds statement </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Reports </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Profile </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Segments </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item mb-3 border">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            <h5>Coins</h5>
                          </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <ul> 
                                <li> <a href='#' style={{textDecoration:"none"}}> Mutual funds </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> National Pension Scheme (NPS) </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Fixed Deposit (FD) </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Features on Coin </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> Payments and Orders </a></li>
                                <li> <a href='#' style={{textDecoration:"none"}}> General </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                </div>

                <div className='col-4'>

                    <div class="alert alert-warning" role="alert">
                        <ul>
                            <li><a href='#'>Latest Intraday leverages and Square-off timings</a></li>
                            <li><a href='#'>Offer for sale (OFS) – June 2026</a></li>
                        </ul>
                    </div>
                    
                    <div class="card" style={{width: "24.5rem"}}>
                        <div class="card-header">
                          Quick Links
                        </div>
                        <ol class="list-group list-group-flush"> 
                            <li class="list-group-item"> <a href='#' style={{textDecoration:"none"}}> 1. Track account opening </a></li>
                            <li class="list-group-item"> <a href='#' style={{textDecoration:"none"}}> 2. Track segment activation </a></li>
                            <li class="list-group-item"> <a href='#' style={{textDecoration:"none"}}> 3. Intraday margins </a></li>
                            <li class="list-group-item"> <a href='#' style={{textDecoration:"none"}}> 4. Kite user manual </a></li>
                            <li class="list-group-item"> <a href='#' style={{textDecoration:"none"}}> 5. Learn how to create a ticket</a></li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default CraeteTicket;