import React from 'react'
const Services = () => {
  return (
    <section id="services" className='dark:bg-black overflow-hidden relative pb-10'>
      
      {/* Heading section */}
      <div>
        <h1 className='text-center space-y-4 p-6 font-cursive mx-auto mb-5 text-gray-500 lg:text-5xl text-3xl font-bold'>
          <span className='text-primary'>My </span>
          Services
        </h1>
      </div>

      {/* Services posts grid */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {/* Services Post 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-primary transition-all duration-300">
          <h2 className="text-2xl font-semibold  mb-2">Front-end Development</h2>
          <p className="text-gray-500 text-sm mb-4">Creating visually engaging and responsive web experiences.</p>
          <p>
            I use modern technologies like React and Tailwind CSS to craft seamless, user-friendly interfaces that adapt across all devices.
          </p>
        </div>

        {/* Service 2 - Back-end Development */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-primary transition-all duration-300">
          <h2 className="text-2xl font-semibold  mb-2">Back-end Development</h2>
          <p className="text-gray-500 text-sm mb-4">Building robust server-side logic and scalable systems.</p>
          <p>
            Whether it’s working with databases, building APIs, or managing server-side infrastructure, I ensure your project’s back-end is secure and scalable.
          </p>
        </div>

        {/* Service 3 - Graphic Design */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-primary transition-all duration-300">
          <h2 className="text-2xl font-semibold  mb-2">Graphic Design</h2>
          <p className="text-gray-500 text-sm mb-4">Creating visually stunning designs with creativity and precision.</p>
          <p>
            As a beginner in graphic design, I’m learning to merge art and technology, creating logos, banners, and digital assets that stand out.
          </p>
        </div>
      </div>
    
    </section>
  )
}

export default Services
