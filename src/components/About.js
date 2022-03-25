import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
                        Hi, I'm John.
                        <br className="hidden lg:inline-block" />I love to build amazing
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed text-red-600">
                        An aspiring Full Stack Web Developer! I'm just starting my Full stack journey, however I am eager to learn and create new applications for the world to enjoy. This protfolio was created using React and Tailwind css, if you would like to hire me just click the "Hire me" right below. I've been living in the sacramento area for 2 years and have become very fond of the city of trees.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Hire Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}