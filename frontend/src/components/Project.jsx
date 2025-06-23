import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-center text-3xl font-bold text-[rgb(72,11,72)] mb-8 ml-4">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ml-4">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden min-h-[300px] flex flex-col">
            <div className="h-48">
              <img src="image/b1.png" alt="Virtual Try on" className="w-full h-40 object-cover" />
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="text-[rgb(72,11,72)] font-semibold text-base">Virtual Try on</h2>
              <Link
                to="/virtual"
                className="px-4 py-1.5 rounded-2xl text-white bg-[rgb(72,11,72)] hover:bg-[rgb(90,20,90)] transition duration-300 text-sm">
                View
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden min-h-[300px] flex flex-col">
            <div className="h-48">
              <img src="image/r1.png" alt="Recipe Sharing" className="w-full h-40 object-cover" />
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="text-[rgb(72,11,72)] font-semibold text-base">Recipe Sharing</h2>
              <Link
                to="/recipe"
                className="px-4 py-1.5 rounded-2xl text-white bg-[rgb(72,11,72)] hover:bg-[rgb(90,20,90)] transition duration-300 text-sm">
                View
              </Link>
            </div>
          </div>

         <div className="bg-white shadow-lg rounded-xl overflow-hidden min-h-[300px] flex flex-col">
            <div className="h-48">
              <img src="image/e1.png" alt="event management" className="w-full h-40 object-cover" />
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="text-[rgb(72,11,72)] font-semibold text-base">Event Management System</h2>
              <Link
                to="/event"
                className="px-4 py-1.5 rounded-2xl text-white bg-[rgb(72,11,72)] hover:bg-[rgb(90,20,90)] transition duration-300 text-sm">
                View
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden min-h-[300px] flex flex-col">
            <div className="h-48">
              <img src="image/z1.png" alt="Pet Adoption" className="w-full h-40 object-cover" />
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="text-[rgb(72,11,72)] font-semibold text-base">Pet Adoption</h2>
               <Link
                to="/pet"
                className="px-4 py-1.5 rounded-2xl text-white bg-[rgb(72,11,72)] hover:bg-[rgb(90,20,90)] transition duration-300 text-sm">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
