import React from 'react'
import img2 from './../../assets/img2.jpg'


const Resume = () => {
  return (
    <section id="resume" className="dark:bg-black overflow-hidden relative">
      <div className='container  p-6'>

      
  <h2 className="text-3xl font-bold text-center">About <span className="text-primary">Me</span></h2>
  <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
    <div>
      <img src={img2} alt="Yasmine Oukemoum" className="w-full h-full object-cover rounded-lg shadow-lg" />
    </div>
  <div className="mt-6">
    <p className="text-gray-700 text-lg">
      Hi, I'm <span className="text-primary font-bold">Yasmine OUKEMOUM</span>, a full-stack developer, AI enthusiast, and a graphic design beginner. Currently, I'm a student at ESTIN, where I’m honing my skills in both technology and creativity.
    </p>

    <p className="text-gray-700 mt-4">
    I’ve always been intrigued by how technology can drive creativity. After exploring programming in my free time, I chose full-stack development to blend coding with my passion for creating interactive, innovative projects. My interest in AI continues to push me to learn and explore new possibilities.
    </p>


    <p className="text-gray-700 mt-4">
    Looking ahead, I aim to deepen my AI expertise and contribute to projects that positively impact lives. I also plan to enhance my graphic design skills to create seamless, visually appealing user interfaces.
    </p>
  </div>
  </div>
  </div>
</section>


  )
}

export default Resume