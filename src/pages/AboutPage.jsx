import React from 'react';
import photo from '../assets/headshot.jpg';

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-color-1 text-white overflow-x-hidden">
      <div className=" mx-auto pt-6 px-4 md:px-16 md:w-screen"> 
        <img
          src={photo}
          alt="Profile Picture"
          className="rounded-full shadow-lg shadow-black size-72 border-solid border-4 border-color-3 mx-auto mt-4"
        />
        <div className="container px-4 mt-12 mb-20 md:px-10"> 
          <h1 className="text-5xl font-bold text-center mt-6">
            Daniel Mayorga is a Software Developer who is passionate about technology and learning new things.
          </h1>
          <hr className="border-2 border-color-3 w-full mt-12" />
          <h2 className="mt-8 text-4xl text-center">Meet Daniel!</h2>
          <div className="mt-8 px-4 md:px-32 text-justify"> 
            <p className="text-xl mb-4">
              Hello there! My name is Daniel Mayorga Perez and I am software developer based in Toronto.
            </p>
            <p className="text-xl mb-4">
              I recently graduated from Centennial College with a diploma in Software Engineering Technician. During my
              studies I learned how to develop software applications using a variety of programming languages and
              tools. I have experience working with Java, C#, Python, HTML, CSS, JavaScript, React, and SQL. I enjoy
              working on projects that challenge me and allow me to learn new things.
            </p>
            <p className="text-xl mb-4">
              In my free time, I enjoy reading, playing video games, watching soccer and series and weightlifting. I
              also like to travel, explore new places and food from all over the world.
            </p>
            <p className="text-xl mb-4">
              I am currently looking for new opportunities to grow and develop my skills. If you would like to get in
              touch with me, please visit the contact page.
            </p>
          </div>
          <div className="text-center"> 
            <a href='/contact'>
                <button className="bg-color-2 w-80 h-12 text-xl font-bold text-color-white rounded-md mt-8 hover:bg-color-3 border-solid border-4 border-color-3 shadow-md shadow-black">
                    Contact Me
                </button>
            </a>
          </div> 
          <hr className="border-2 border-color-3 w-full mt-12" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
