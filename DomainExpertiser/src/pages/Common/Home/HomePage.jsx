import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import WelcomeBanner from '../../../partials/dashboard/WelcomeBanner';
import project from "../../../assets/project.jpg";


function Home({ userDetail }) {
  const [preivousProject, setPreviousProject] = useState(null);

  return (
    <>
      {/* Welcome banner */}
      <WelcomeBanner userName={userDetail.firstName + " " + userDetail.lastName} />

      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-center sm:items-center mb-8 ">

        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover rounded-t-lg h-full md:h-auto lg:w-96 md:rounded-none md:rounded-l-lg" src={project} alt="" />
          <div className="flex flex-col justify-between p-4 md:gap-10 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Discover Elite Developers for Your Next Project.</h5>
            <div className='flex flex-row justify-between items-center'>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Let's select the developers who craft customized solutions to fit your project's exact needs, ensuring scalability and future-ready results.</p>
              <Link to={"/"}>
                <button type="button" className="ml-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Select Developer</button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
      </div>
    </>
  );
}

export default Home;