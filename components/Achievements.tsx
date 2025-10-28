'use client';

import React from 'react';
import ShinyText from './ShinyText';
import { Accordion, AccordionItem } from '@heroui/react';
import { achievements, type AchievementItem } from '@/lib/achievementsData';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        {/* Left side - Title and Description */}
        <div className="lg:max-w-md lg:sticky lg:top-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 text-purple-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ShinyText text="ACHIEVEMENTS" speed={3} className="text-xs tracking-wider" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Awards</h2>
          <p className="text-gray-400 text-lg">
            From winning hackathons to building innovative aerospace systems, here are some of the
            notable achievements I've worked on with Thunderclap Labs and beyond.
          </p>
        </div>

        {/* Right side - Achievement Cards */}
        <div className="flex-1 lg:max-w-2xl">
          <Accordion
            variant="light"
            className="px-0 gap-0"
            itemClasses={{
              base: 'border-b border-gray-800/50 last:border-b-0',
              title: 'text-white font-medium',
              trigger: 'py-4 px-0 hover:bg-transparent data-[hover=true]:bg-transparent',
              content: 'px-0 pb-4 pt-0',
              indicator: 'text-gray-500',
            }}
          >
            {achievements.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={item.title}
                title={
                  <div className="flex items-center justify-between gap-4 w-full">
                    {/* Left: Icon + Title & Category */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-full bg-gray-900/50 flex items-center justify-center overflow-hidden shrink-0">
                        <span className="material-icons text-white text-xl">
                          {item.icon}
                        </span>
                      </div>

                      {/* Title and Category */}
                      <div className="flex flex-col items-start">
                        <h3 className="text-white font-medium text-base">{item.title}</h3>
                        <span className="text-gray-500 text-sm">{item.category}</span>
                      </div>
                    </div>

                    {/* Right: Date */}
                    <div className="text-right text-sm text-gray-500 shrink-0 ml-4">
                      {item.date}
                    </div>
                  </div>
                }
              >
                <div className="pl-14 pr-0">
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  {/* Details List */}
                  {item.details.length > 0 && (
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-gray-400 text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-gray-600 shrink-0">•</span>
                          <span dangerouslySetInnerHTML={{ __html: detail }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
