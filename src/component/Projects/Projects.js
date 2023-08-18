import React from 'react'
import proj1 from '../../assests/proj1.png'
import proj5 from '../../assests/proj5.jpg'
import PRoject from '../../assests/PRoject.png'
import proj2 from '../../assests/proj2.jpg'
import proj4 from '../../assests/pro4.jpg'
import pre from '../../assests/pre.jpg'
const Projects = () => {
  return (
    <div>
       <section id='Projects' class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
  My<span className="text-pink-600 font-bold"> Projects</span>
</h1>

            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">What i was learnt in my journey of Development Applications</p>
          </div>
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4 rounded-lg">
          <div class="flex relative rounded-lg">
          <img
  alt="gallery"
  className="absolute inset-0 w-full h-full object-cover object-center"
  src={proj1}
/>

            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">HTML, CSS, JS, Bootstrap</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Portfolio Website</h1>
              <a href="http://drsmitanirkhi.com/" target="_blank"><p class="leading-relaxed hover:text-pink-600 hover:font-bold">www.drsmitanirkhi.com</p></a>
              <p class="leading-relaxed"></p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <img
  alt="gallery"
  className="absolute inset-0 w-full h-full object-cover object-center"
  src={proj5}
/>

            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-pink-500 mb-1"> CSS, JS, TMDB API,  ReactJs, Redux</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Movix Application</h1>
              <a href="https://zesty-tanuki-fde7c2.netlify.app/" target="_blank"><p class="leading-relaxed hover:text-pink-600 hover:font-bold">https://zesty-tanuki-fde7c2.netlify.app/</p></a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <img
  alt="gallery"
  className="absolute inset-0 w-full h-full object-cover object-center"
  src={PRoject}
/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-pink-500 mb-1"> CSS, JS, ReactJs, Redux, Strapi </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Ecommerce Website</h1>
              <p class="leading-relaxed">Photo booth fam kinfol</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <img
  alt="gallery"
  className="absolute inset-0 w-full h-full object-cover object-center"
  src={proj2}
/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">HTML, CSS      </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Netflix Clone</h1>
              <a href="https://adorable-marzipan-12da00.netlify.app" target="_blank"><p class="leading-relaxed hover:text-pink-600 hover:font-bold">https://adorable-marzipan-12da00.netlify.app</p></a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <img
  alt="gallery"
  className="absolute inset-0 w-full h-full object-cover object-center"
  src={proj4}
/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">ReactJs, JS, TailwindCSS</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Payment Gateway</h1>
              {/* <a href="https://dashing-lollipop-39f3b0.netlify.app/" target="_blank"><p class="leading-relaxed hover:text-pink-600 hover:font-bold">https://dashing-lollipop-39f3b0.netlify.app/</p></a> */}
              <a href="https://dashing-lollipop-39f3b0.netlify.app/" target="_blank"><p class="leading-relaxed hover:text-pink-600 hover:font-bold">https://dashing-lollipop-39f3b0.netlify.app/</p></a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <img
  alt="gallery"
  className="absolute inset-0 w-full h-full object-cover object-center"
  src={pre}
/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">Work in Progress</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Work in Progress</h1>
              <p class="leading-relaxed">........................</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Projects
