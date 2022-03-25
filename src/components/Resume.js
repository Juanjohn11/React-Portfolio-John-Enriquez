import React from 'react';
export default function Resume() {
    return (
        <section id="resume" className="my-5">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <p className="sm:text-4xl text-3xl font-medium title-font text-red-600 mb-4">
                        <a href="https://www.linkedin.com/in/john-enriquez-perez-ab8b5b234/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYOj3BEJJQ96wd9FfjnSCDg%3D%3D">Download My Resume</a>
                    </p>
                    <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Skills
                    </h2>
                    <h3 className="sm:text-2xl text-3xl font-medium title-font text-white mb-4">Front-end Proficiencies</h3>
                    <ul className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h3 className="sm:text-2xl text-3xl font-medium title-font text-white mb-4">Back-end Proficiencies</h3>
                    <ul className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>

    );
}