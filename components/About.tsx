'use client';

import React from 'react';
import ShinyText from './ShinyText';

const About: React.FC = () => {
  const skills = [
    'Python', 'JavaScript', 'React.js', 'Vue.js', 'Node.js', 'Next.js',
    'PHP', 'SQL', 'noSQL', 'GraphQL', 'MongoDB', 'HTML', 'CSS', 'Tailwind'
  ];

  const knowHows = [
    'C#', 'C++', 'Rust', 'Unity', 'PyTorch', 'Tensorflow', 'Blender', 'Fusion 360'
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - About Me */}
        <div>
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-5 text-cyan-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ShinyText text="ABOUT ME" speed={3} className="text-xs tracking-wider" />
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">Hi there! I'm Ignas</h2>
          
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm a self-taught software engineer based in <span className="text-cyan-500">Kaunas, Lithuania</span>, 
              currently studying Computer Science & Cyber Security Engineering @ KTU. I've had a thing for tech 
              since I was young, and since then I have taught myself to code in various programming languages.
            </p>

            <p>
              I've had the pleasure of working on some noteworthy projects, including{' '}
              <span className="text-white font-medium">Fuel Map</span> which is a gas station map providing 
              real-time prices. There's also <span className="text-white font-medium">Project Green</span>, an 
              app designed to showcase the latest listings from specific websites. Plus, I crafted{' '}
              <span className="text-white font-medium">Armilla</span>, a fully functional online store prototype. 
              I also have cyber-security experience and hold a prestigious placement on the{' '}
              <span className="text-cyan-500 font-medium">Google Bug Bounty Honorable Mentions List</span>.
            </p>

            <p>
              When I'm not coding, you'll find me building robots, working on cool projects, and soaking up new 
              knowledge. I'm excited to bring my skills and enthusiasm to projects that challenge the norm and 
              keep tech moving forward.
            </p>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-8 flex flex-col items-center justify-center h-full">
          {/* My Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 text-purple-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">My Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-500 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Know-Hows */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 text-purple-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M9.663 17H14.663L12.663 13.5L9.663 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2L2 19.5H22L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Know-Hows</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {knowHows.map((knowHow, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-purple-500 transition-all duration-300"
                >
                  {knowHow}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
