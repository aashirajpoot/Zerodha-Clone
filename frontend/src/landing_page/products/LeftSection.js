import React from 'react'

function LeftSection({imageURL, productName, productDescription, tyrDemo, learnMore, googlePlay, appStore}) { //props
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-7 mt-5'>
                    <img src={imageURL}/>
                </div>
                <div className='col-5 mt-5'>
                    <h2>{productName}</h2>
                    <p style={{maxWidth: "420px", lineHeight: "1.8"}}>{productDescription}</p>
                    <div className='d-flex gap-5 mt-4'>
                        <a href='{tryDemo}' style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        <a href='{learnMore}' style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>
                    <div className='mt-3'>
                        <a href='{googlePlay}'> <img src='media/images/googlePlayBadge.svg'/> </a>
                        <a href='{appStore}' style={{marginLeft:"30px"}}> <img src='media/images/appstoreBadge.svg'/> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;