import React, { useState } from 'react'

const Contact = () => {
const [user, setUser]=useState({
  name: " ",
  email: " ",
  Message: " ",
});

let name,value;
const PostUserData = (event)=>{
  name= event.target.name;
  value= event.target.value;

  setUser({ ...user, [name]:value});

};

const submitData =(event)=>{
  event.preventDefault();
  const{name,email,message}=user;
  fetch('https://portfolio-a22d7-default-rtdb.firebaseio.com/userDataRecord.json',{
   method:"POST",
   headers:{
    "Content-Type" :"application/json",
   },
   body:JSON.stringify({
    name,email,message
   }),
  }
  );
 
    if (Response) {
      setUser({
        name: "",
        email: "",
        message: "",
      });
      alert('Thanks for contacting me!');
    } else {
      alert('Failed to submit data. Please try again.');
    }
  
};

  return (
    <div>
      <section id='Contact' class="text-gray-600 bg-pink-100 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
  Contact<span className="text-pink-600 font-bold"> Me</span>
</h1>

        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Want connect with me just drop a message.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-pink-600 font-bold">Name</label>
              <input type="text" id="name" name="name" placeholder='John Doe' value={user.name} onChange={PostUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-pink-600 font-bold">Email</label>
              <input type="email" id="email" name="email" placeholder='john@example.com' value={user.email} onChange={PostUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-pink-600 font-bold">Message</label>
              <textarea id="message" name="message" placeholder='Please let me know, how can I help you.' value={user.message} onChange={PostUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button onClick={submitData} class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
              
              Send Message

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-1 ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Contact
