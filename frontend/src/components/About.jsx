import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
        <Navbar/>
      
      <div className="grid grid-cols-2 gap-4  " >
          <div className='herosec text-black py-35 px-30' >
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet obcaecati cum ad corporis dicta odio deserunt? Ipsum quos velit fugiat eius fugit, accusamus, asperiores nesciunt eligendi unde expedita totam.</p>
          </div>
       
          <div className=" ml-20 mt-25 rounded-lg"><img src="image/h.jpg" alt="" height="200px" width="400px " /> </div>
      </div>

    </>
  );
};

export default About;
