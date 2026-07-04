import React from "react";

function Hero() {
  return (
    <div className="p-5 py-5" style={{backgroundColor:"#f0f0f0"}}> 
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Support Portal</h1>   
          <button className="btn btn-primary"> My Tickets </button>
        </div>  
        <input className="form-control" type="search" placeholder="Eg: How do I open my account, How do I activate F&O..." aria-label="Search" style={{ height: "70px", fontSize: "1.2rem" }} />  
    </div>
  );
}

export default Hero;