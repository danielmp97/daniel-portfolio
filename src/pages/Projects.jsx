import React from "react";
import medlink from "../assets/medlink.png";
import incident from "../assets/incident.png";
import github from "../assets/github.png";
import wpf from "../assets/wpf.png";
import javaApp from "../assets/java_app.png";

const Projects = () => {
    return (
        <div className="flex flex-col bg-color-1 text-white overflow-auto"> 
            <h1 className="text-5xl font-bold text-center mt-6">Projects</h1>
            <div className="mt-10">
                <ProjectBox 
                    image={medlink} 
                    title="MedLink - Clinic Appointment System" 
                    description="MedLink is a web application, developed using the MERN stack. It allows patients and doctors to seamlessly set appointments according to the patients' and doctors' availability. Similarly, it allows the clinic staff to have control of the privileges and database management." 
                    repoUrl={"https://github.com/danielmp97/COMP231-007-Team-3-W24-"}
                    projectUrl={"https://medlink-m2u5.onrender.com/login"}
                />
            </div>
            <div className="mt-10">
                <ProjectBox 
                    image={incident} 
                    title="Incident Management System" 
                    description="The Incident Management System is a web application developed using the MERN stack. It allows tenants to report incidents in their building, including useful data such as the urgency, description and images. The application also allows building managers to view all incidents, update the status of incidents, and view the history of incidents." 
                    repoUrl={"https://github.com/sheifscarlet/COMP229_Ouroboros"}
                    projectUrl={"https://incident-management-system-798a715d0c26.herokuapp.com/"}
                />
            </div>
            <div className="mt-10">
                <ProjectBoxNoLive 
                        image={wpf} 
                        title="Course Enrollment WPF Application" 
                        description="The Course Enrollment WPF Application is a desktop application develped in C# using an SQL database. It allows students to enroll in courses, view their currently enrolled courses and to delete courses." 
                        repoUrl={"https://github.com/danielmp97/FinalExam"}
                    />
            </div>
            <div className="my-10">
                <ProjectBoxNoLive 
                        image={javaApp} 
                        title="Player Registration Java Application" 
                        description="The Player Registration Java Application is a desktop application developed in Java and storing data in an SQL database. It allows users to register players, view the list of registered players, add score information, update player information and delete players" 
                        repoUrl={"https://github.com/danielmp97/DanielMayorgaPerez_COMP228Lab5/tree/master"}
                    />
            </div>
        </div>  
    );
};  


const ProjectBox = ({ image, title, description, repoUrl, projectUrl }) => {
    return (
        <div className="bg-color-2 lg:mx-auto lg:w-8/12 md:w-9/12 mx-4 rounded-md shadow-lg shadow-black p-4">
            <div className="grid lg:grid-cols-[60%_38%] md:grid-cols-1 gap-4">
                <div>
                    <img src={image} alt="Project" className="md:w-full h-fit max-h-64 rounded-md" />
                </div>
                <div>
                    <h2 className="text-2xl">
                        {title}
                    </h2>
                    <p className="mt-2 text-justify">
                        {description}
                    </p>
                    <div className="w-auto mx-auto mt-2 grid lg:grid-cols-[25%_75%] lg:gap-0 grid-cols-1 gap-4">
                        <a target="_blank" href={repoUrl} className="w-fit h-fit">
                            <img src={github} alt="GitHub" className=" mx-auto h-9 mt-4" />  
                        </a>
                        <a target="_blank" href={projectUrl}>
                            <button className="bg-color-2 w-48 mt-3 font-bold text-color-white rounded-md hover:bg-color-3 border-solid border-4 border-color-3 shadow-md shadow-black">
                                Live Project
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );8
};

const ProjectBoxNoLive = ({ image, title, description, repoUrl }) => {
    return (
        <div className="bg-color-2 lg:mx-auto lg:w-8/12 md:w-9/12 mx-4 rounded-md shadow-lg shadow-black p-4">
            <div className="grid lg:grid-cols-[60%_38%] md:grid-cols-1 gap-4">
                <div>
                    <img src={image} alt="Project" className="md:w-full h-fit max-h-64 rounded-md" />
                </div>
                <div>
                    <h2 className="text-2xl">
                        {title}
                    </h2>
                    <p className="mt-2 text-justify min-h-32">
                        {description}
                    </p>
                    <div className="w-auto mx-auto">
                        <a target="_blank" href={repoUrl} className="w-fit h-fit">
                            <img src={github} alt="GitHub" className="mx-auto h-9 mt-4" />  
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );8
};



export default Projects;