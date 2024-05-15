import React, { useRef } from 'react';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1dd9y9x', 'template_4wvdwqm', form.current, 'flNt08hCJKfnbvGag')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        Swal.fire({
            icon: "success",
            title: "Thanks for contacting me!",
            text: "I will get back to you as soon as possible.",
          });
    };

    return (
        <div className="flex flex-col justify-between min-h-screen bg-color-1 text-white overflow-x-hidden">
            <div className="container w-10/12 lg:w-8/12 mx-auto">
                <h1 className="text-5xl font-bold text-center mt-8">
                    Let's Get In Touch! 
                </h1>
                <div className="mt-8 rounded-md grid lg:grid-cols-2 gap-2 md:grid-cols-1 bg-color-2 shadow-lg shadow-black">
                    <div className="w-full m-auto lg:border-r-2 h-5/6 border-color-3 flex flex-col justify-center px-2">
                        <div className="mb-4 flex items-center lg:ml-14 ml-4">
                            <a target="_blank" href="https://linkedin.com/in/daniel-mayorga-8257a415b">
                                <img src={linkedin} className="h-10" alt="LinkedIn"/>
                            </a>
                            <h1 className="text-2xl mt-4 lg:mt-0 font-bold ml-2">
                                Connect with me on LinkedIn
                            </h1>
                        </div>
                        <div className="flex items-center lg:ml-14 ml-4">
                            <a target="_blank" href="https://github.com/danielmp97">
                                <img src={github} className="h-10" alt="GitHub"/>
                            </a>
                            <h1 className="text-2xl font-bold ml-2">
                                Follow me on GitHub
                            </h1>
                        </div>
                        <hr className="border-2 border-color-3 w-10/12 mx-auto mt-5 lg:border-0 lg:mt-0"></hr>
                    </div>
                    <div className="flex flex-col justify-center items-center px-2 py-4">
                        <h1 className="text-2xl font-bold mb-4">
                            Send me a message
                        </h1>
                        <form ref={form} onSubmit={sendEmail} className="w-10/12">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="text-xl mb-1">Name:</label>
                                <input type="text" id="name" name="name" className="bg-color-3 rounded-md  h-8 shadow-md shadow-black p-2"/>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="text-xl mb-1">Email:</label>
                                <input type="text" id="email" name="email" className="bg-color-3 rounded-md h-8 shadow-md shadow-black p-2" />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label htmlFor="message" className="text-xl mb-1">Message:</label>
                                <textarea id="message" name="message" className="bg-color-3 rounded-md h-32 shadow-md shadow-black p-2" />
                            </div>
                            <div>
                                <button className="bg-color-2 w-full h-10 text-xl font-bold text-color-white rounded-md hover:bg-color-3 border-solid border-4 border-color-3 shadow-md shadow-black">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
