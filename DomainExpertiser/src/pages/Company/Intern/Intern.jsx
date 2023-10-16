import React, { useState } from 'react'

function Intern() {
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
      <h1 className='text-xl md:text-2xl text-slate-800 dark:text-slate-100 font-semibold mb-1 uppercase'>Provide Intern</h1>
      <div className="sm:flex sm:justify-center sm:items-center mb-8">
        <section className="bg-transparent dark:bg-gray-900">
          <div className="py-8 px-4 w-full lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Intern Details</h2>
            <form action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="internName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Intern Name</label>
                  <input type="text" name="internName" id="internName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Intern Name" required />
                </div>
                <div className="w-full">
                  <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domain</label>
                  <input type="text" name="domain" id="domain" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product Domain" required />
                </div>
                <div className="w-full">
                  <label htmlFor="stipend" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stipend</label>
                  <input type="number" name="stipend" id="stipend" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product Stipend" required />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                  <div className='w-full flex items-center justify-self-center'>
                    <div className="relative">
                      <input
                        name="start"
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date start"
                      />
                    </div>
                    <span className="mx-4 text-gray-500">to</span>
                    <div className="relative">
                      <input
                        name="end"
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date end"
                      />
                    </div>
                  </div>
                </div>
                <fieldset className='mt-4 w-full m:col-span-2'>
                  <legend className="block text-sm font-medium leading-6  dark:text-white text-gray-900">Choose the TECH stack</legend>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-around">
                    {Interests.map((interest) => (
                      <div className="relative flex gap-x-3 items-center" key={interest}>
                        <input
                          id={interest}
                          name={interest}
                          type="checkbox"
                          checked={selectedInterests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <p className="text-sm leading-6 font-normal dark:text-gray-300 text-gray-900">{interest}</p>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <div className="sm:col-span-2 w-full">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                </div>
                <div className="sm:col-span-2 w-full">
                  <label htmlFor="perks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Perks</label>
                  <textarea id="perks" rows="8" className="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Perks here"></textarea>
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
      </div >
    </>
  )
}

export default Intern




