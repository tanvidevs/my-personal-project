import React from 'react';

import tanvi from '../../assests/tanvi.png'


const Home = () => {
  return (
    <div>
         
      <section id='Home' className="text-gray-600 body-font bg-pink-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hello,
              <br className="hidden lg:inline-block" />I'm{' '}
              <span className="text-pink-600 font-bold">Tanvi Mirase</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed" align="justify">
              Front-End Developer from MH India. I create seamless web experiences for end users.
            </p>
            <div className="flex justify-center">
            <a href="https://bit.ly/443FjHD" target='_blank' // Replace with the actual path to your PDF filtarget="_blank" download="your-cv.pdf"
>
            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg shadow-md shadow-pink-600">
            Download CV
             </button>
            </a>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg shadow-md">
                Projects
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={tanvi}
            />
          </div>
        </div>
        
        <div>
            
        </div>
        
      </section>
    
    </div>
  );
};

export default Home;

