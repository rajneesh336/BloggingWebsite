import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Slider = () => {
    const targetRef = useRef(null);
    const location = useLocation();
    const componentName = location?.pathname?.substring(1); 
  
    const handleButtonClick = () => {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <>
    { componentName !== 'blog-detail' &&
      <>
    <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
    <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
            <img className="d-block w-100 my-4" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="First slide"/>
             <div className="gradient"></div>
              <div className="carousel-caption">
               <h1>Blogging the Tech world</h1>
               <p className="lead">View Blogs</p>
               <a className="btn btn-primary" onClick={handleButtonClick}><span>click to Scroll</span></a>
              </div>
        </div>
    </div>
</div>
<div ref={targetRef}></div>
</>
    }
</>
  )
}

export default Slider
