import React,{useRef,useState} from "react";
import linkedinLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import twitterLogo from "../images/twitter.png";
import emailjs from 'emailjs-com';
import {AiOutlineFileDone} from 'react-icons/ai'
export const Contact = () => {
  const [emailSent,setEmailSent] = useState(false);
  const form = useRef(null);
  const sendEmail = () => {
    //  @ts-ignore
    emailjs.sendForm('service_uw4032a', 'template_m3sqt9f', form.current , 'TEmlN1P1-TMTgzRj0')
      .then((result) => {
        //@ts-ignore
        form.current[0].value ='';
        //@ts-ignore
        form.current[1].value ='';
        //@ts-ignore
        form.current[2].value ='';
        setEmailSent(true);
        
      }, (error) => {
           alert(error.text);
      });
  };

  return (
    <div className="bg-black pb-5" id="Contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1c171c"
          fillOpacity="1"
          d="M0,256L720,160L1440,256L1440,0L720,0L0,0Z"></path>
      </svg>
      <div className="flex items-center py-4 mb-2 max-sm:mb-0 justify-center">
        <div className="h-px bg-amber-300 w-[10%]"></div>
        <h1
          className="text-[3rem] bg-gradient-to-r
   from-yellow-100 via-amber-100 to-white inline-block 
     text-transparent bg-clip-text font-bold font-roboto max-lg:mt-0 mx-2">
          Contact
        </h1>
        <div className="h-px bg-amber-300 w-[10%]"></div>
      </div>
      <div className="flex flex-wrap justify-center mb-10">
        <a href="https://www.linkedin.com/in/shrey-sinha-codes/">
          <img
            src={linkedinLogo}
            alt="linkedin"
            className="w-20 h-20 cursor-pointer"></img>
        </a>
        <a href="https://twitter.com/me_shrey1">
          <img
            src={twitterLogo}
            alt="twitter"
            className="w-20 h-20 cursor-pointer"></img>
        </a>
        <a href="https://github.com/shrey02">
          <img
            src={githubLogo}
            alt="github"
            className="w-20 h-20 cursor-pointer"></img>
        </a>
      </div>
      <section className="body-font relative border-2 border-gray-600 border-dashed rounded-lg w-[50%] max-sm:w-[95%] m-auto px-1 py-3 bg-[#4e4e4e1d]">
        <div className="container px-5 mx-auto">
          <div className="lg:w-[100%] mx-auto">
            {emailSent ? (
            <div className="w-[100%] h-[20rem] ">
                      <h2 className="text-green-500 text-3xl text-center">
                        Sent <AiOutlineFileDone className="m-auto text-6xl"/> 
                      </h2>
                      <button onClick={()=>setEmailSent(emailSent => !emailSent)} className="bg-pink-600 text-gray-200 ml-[50%] -translate-x-[50%] p-2 rounded-lg mt-5">
                                Send another mail
                      </button>
            </div>):( <form  className="flex flex-wrap -m-2" ref={form}>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-lg text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#141414df] rounded focus:border-1 text-white focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-lg text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#141414df] rounded focus:border-1 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-lg text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-[#141414df] rounded border-0 focus:border-1 focus:border-blue-700 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                    ></textarea>
                    
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={(e)=>{
                  e.preventDefault();
                  sendEmail();
                  }} className="flex mx-auto text-white bg-pink-700 border-0 py-2 px-8 focus:outline-none hover:bg-pink-900 rounded text-lg">
                  Send
                </button>
              </div>
            </form>)}
           
          </div>
        </div>
      </section>
    </div>
  );
};
