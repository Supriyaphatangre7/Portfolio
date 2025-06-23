import React from 'react'
import Navbar from './Navbar'

const Gallery = () => {
  return (
    <>
      <Navbar />
      <p className='text-center mt-7 font-bold text-2xl font-sans text-[rgb(72,11,72)] underline'>My Certificates</p>
      
      {/* Centered Carousel */}
      <div className="flex justify-center mt-10">
        <div className="carousel w-full max-w-4xl h-[500px] rounded-xl shadow-lg">
          <div id="item1" className="carousel-item w-full">
            <img src="image/c1.jpeg" className="w-full h-full object-contain rounded-xl" alt="Certificate 1" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="image/c2.jpeg" className="w-full h-full object-contain rounded-xl" alt="Certificate 2" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="image/c3.jpeg" className="w-full h-full object-contain rounded-xl" alt="Certificate 3" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="image/c4.jpeg" className="w-full h-full object-contain rounded-xl" alt="Certificate 4" />
          </div>
          <div id="item5" className="carousel-item w-full">
            <img src="image/c5.jpeg" className="w-full h-full object-contain rounded-xl" alt="Certificate 5" />
          </div>
          <div id="item6" className="carousel-item w-full">
            <img src="image/c6.jpeg" className="w-full h-full object-contain rounded-xl" alt="Certificate 6" />
          </div>
          <div id="item7" className="carousel-item w-full">
            <img src="image/c7.jpeg" className="w-full h-full object-contain rounded-xl" alt="Certificate 7" />
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 py-4">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        <a href="#item5" className="btn btn-xs">5</a>
        <a href="#item6" className="btn btn-xs">6</a>
        <a href="#item7" className="btn btn-xs">7</a>
      </div>
    </>
  )
}

export default Gallery
