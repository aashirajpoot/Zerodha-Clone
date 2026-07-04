import React from 'react'

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <h2>{productName}</h2>
                    <p style={{maxWidth: "420px", lineHeight: "1.8"}}>{productDescription}</p>
                    <div className='d-flex'>
                        <a href='{learnMore}' style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>
                </div>
                <div className='col-6 mt-5'>
                    <img src={imageURL} alt={productName} className="img-fluid" style={{ width: "110%" }} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;