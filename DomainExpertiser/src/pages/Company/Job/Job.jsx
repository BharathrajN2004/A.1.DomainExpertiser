import React, { useState } from 'react'

function Job() {
  const Interests = ['React', 'Mongodb', 'Node js', 'Next js', 'Astro', 'Nest js', 'Tauri', "Flutter", "Kotlin"];
  const [selectedInterests, setSelectedInterests] = useState([]);
  const handleInterestChange = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  return (
    <>
      <h1 className='text-xl md:text-2xl text-slate-800 dark:text-slate-100 font-semibold mb-1 uppercase'>Provide Job</h1>
      <div className="sm:flex sm:justify-center sm:items-center mb-8">
        <section className="bg-transparent dark:bg-gray-900">
          <div className="py-8 px-4 w-full lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Job Details</h2>
            <form action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="jobRole" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Role</label>
                  <input type="text" name="jobRole" id="jobRole" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Job Role" required />
                </div>
                <div className="w-full">
                  <label htmlFor="Qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification</label>
                  <input type="text" name="Qualification" id="Qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Minimum Qualification" required />
                </div>
                <div className="w-full">
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                  <input type="number" name="experience" id="experience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Minimum year of Experience" required />
                </div>
                <div className="w-full">
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                  <input type="number" name="experience" id="experience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Minimum year of Experience" required />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                </div>
              </div>
              <button className=" mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Job