import React from 'react';
import Navbar from './Navbar';
import About from './About';

const Homepage = () => {
  return (
    <>
      <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/image/a2.jpg')" }}>
        <Navbar />

        <div className='herosec text-black py-35 px-30' >
          <p className='d1 text-[rgb(72,11,72)] text-3xl font-bold'  >I'm</p>
          <h1 className='d2 text-5xl font-bold my-4'>Supriya Phatangre</h1>

          <h3 className="text-4xl my-6  flex gap-2">
            <span className="opacity-0 animate-fade-in delay-1">Web</span>
            <span className="opacity-0 animate-fade-in delay-2">Developer</span>
          </h3>

          <div className='d3 my-15 flex gap-2'>
            <a href=" frontend\public\supriya_resume.pdf" download>
              <button className="px-4 py-2 rounded-2xl text-white bg-[rgb(72,11,72)] hover:bg-[rgb(90,20,90)] transition duration-300">
                Download CV
              </button>
            </a>
            
          </div>
        </div>
      </div>

      <div className="main mt-30 ">
        <p className=' text-center px-150 font-bold text-2xl font-sans text-[rgb(72,11,72)]'>My Services</p>
        <div className='ml-20 mt-10 grid grid-cols-4 gap-90'>
          <div className="box1">
            <div className="card w-96  card-lg shadow-sm  ">
              <div className="card-body  bg-gray-100 rounded-8xl">
                <h2 className="card-title">Creative Design</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

              </div>
            </div>
          </div>

          <div className="box1">
            <div className="card w-96  card-lg shadow-sm  ">
              <div className="card-body  bg-gray-100 rounded-8xl">
                <h2 className="card-title">Web Design</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

              </div>
            </div>
          </div>

          <div className="box1">
            <div className="card w-96  card-lg shadow-sm  ">
              <div className="card-body  bg-gray-100 ">
                <h2 className="card-title">UI/UX Design</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

              </div>
            </div>
          </div>

        </div>
      </div>

       <p className='text-center px-140 mt-20 font-bold text-2xl font-sans text-[rgb(72,11,72)]'>More About Me </p>
      <div className="grid grid-cols-2 gap-4  " >
          <div className='herosec text-black py-30 px-30' >
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet obcaecati cum ad corporis dicta odio deserunt? Ipsum quos velit fugiat eius fugit, accusamus, asperiores nesciunt eligendi unde expedita totam.</p>
          </div>
       
        <div className=" ml-20 mt-25 rounded-lg"><img src="image/h.jpg" alt="" height="200px" width="400px " />    </div>

      </div>




    </>

  );
};

export default Homepage;
