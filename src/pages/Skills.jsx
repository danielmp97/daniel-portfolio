import React from 'react';
import leadership from '../assets/leadership.png';
import problem from '../assets/problem.png';
import communication from '../assets/communication.png';
import time from '../assets/time.png';
import teamwork from '../assets/teamwork.png';
import learn from '../assets/learn.png';
import creative from '../assets/creative.png';
import ethic from '../assets/ethic.png';
import csharp from '../assets/csharp.png';
import javascript from '../assets/javascript.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import sql from '../assets/sql.png';
import react from '../assets/react.png';
import html from '../assets/html5.png';
import css from '../assets/css.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';

const Skills = () => {
    return (
        <div className="min-h-screen bg-color-1 text-white overflow-x-hidden">
            <div className="container mx-auto px-4 py-20 w-10/12">
                <h1 className="text-5xl font-bold mb-10">
                    Soft Skills
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 animate-fade-in-down">
                    <SkillBox image={leadership} text="Leadership" />
                    <SkillBox image={problem} text="Problem Solving" />
                    <SkillBox image={time} text="Time Management" />
                    <SkillBox image={communication} text="Communication" />
                    <SkillBox image={teamwork} text="Teamwork" />
                    <SkillBox image={learn} text="Continuous Learning" />
                    <SkillBox image={creative} text="Creativity" />
                    <SkillBox image={ethic} text="Work Ethic" />
                </div>
                <h1 className="text-5xl font-bold mb-10 mt-12">
                    Technical Skills
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 animate-fade-in-down">
                    <SkillBox image={csharp} text="C#" />
                    <SkillBox image={javascript} text="JavaScript" />
                    <SkillBox image={java} text="Java" />
                    <SkillBox image={python} text="Python" />
                    <SkillBox image={sql} text="SQL" />
                    <SkillBox image={html} text="HTML" />
                    <SkillBox image={css} text="CSS" />
                    <SkillBox image={tailwind} text="Tailwind CSS" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-down mt-8 lg:w-6/12 lg:mx-auto">
                    <SkillBox image={mongodb} text="MongoDB" />
                    <SkillBox image={express} text="Express" />
                    <SkillBox image={react} text="React" />
                    <SkillBox image={node} text="Node.js" />
                </div>
            </div>
        </div>
    );
};

const SkillBox = ({ image, text }) => {
    return (
        <div className="flex flex-col items-center">
            <div className=" bg-color-2 border-4 border-color-3 rounded-md p-2 h-fitmx-auto hover:animate-bouncing hover:animate-duration-fast shadow-lg shadow-black">
                <img className="size-24 mx-auto"
                    src={image}
                    alt={text} />
            </div>
            <p className="text-lg text-center mt-2">{text}</p>
        </div>
    );
};

export default Skills;
