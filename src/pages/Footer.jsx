import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
    return (
        <div className="bg-color-2 text-white p-2 h-18 overflow-x-hidden">
            <div className="grid grid-cols-2">
                <div className="flex my-auto">
                    <a target="_blank" href="https://www.linkedin.com/in/daniel-mayorga-8257a415b/">
                        <img src={linkedin} className="h-7 lg:ml-24 ml-5 mr-4" alt="LinkedIn"/>
                    </a>
                    <a target="_blank" href="https://github.com/danielmp97"> 
                        <img src={github} className="h-7" alt="GitHub"/>
                    </a>
                </div>
                <div className="mr-6 lg:mr-12">  
                    <p className="text-right my-auto">
                        Daniel Mayorga Perez &copy; 2024
                    </p>   
                    <p className="text-right my-auto text-sm"> 
                        Icons by <u><a target="_blank" href="https://icons8.com/">Icons8</a></u>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;