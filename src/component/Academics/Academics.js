import React from 'react'
import acaad from '../../assests/acaad.png'
const Academics = () => {
  return (
    
       <section id='Academics' class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
  My<span className="text-pink-600 font-bold"> Academics</span>
</h1>

            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Achievements of academics journey</p>
        </div>
        
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
  alt="feature"
  className="object-cover object-center h-full w-full"
  src={acaad}
/>

            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  
                </div>
                
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">10th Std</h2>
                  <p class="leading-relaxed text-base">Percentage : 70.20%</p>
                  <p class="mt-3 text-pink-500 inline-flex items-center">Major Hemant Jakate VIdhyaniketan
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Diploma in Computer Science</h2>
                  <p class="leading-relaxed text-base">Percentage : 67.20%</p>
                  <p class="mt-3 text-pink-500 inline-flex items-center">G H Raisoni Polytechnic
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">B.Tech in Computer Engineering</h2>
                  <p class="leading-relaxed text-base">CGPA : 8.85%</p>
                  <p class="mt-3 text-pink-500 inline-flex items-center">VIT - Vidharbha Insitiute of Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>
      </div>
    </section>
    )
}  

export default Academics
