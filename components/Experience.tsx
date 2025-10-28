'use client';

import React from 'react';
import ShinyText from './ShinyText';
import { Accordion, AccordionItem } from '@heroui/react';
import { experience, type ExperienceItem } from '@/lib/experienceData';

const formatDate = (dateStr: string) => {
  if (dateStr === 'Current') return 'Present';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const Experience: React.FC = () => {
  return (
    <section id="work-history" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
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
            <ShinyText text="WORK HISTORY" speed={3} className="text-xs tracking-wider" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">
            I have worked with some of the most innovative industry leaders to help build their
            top-notch products.
          </p>
        </div>

        {/* Right side - Experience Cards */}
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
            {experience.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={`${item.position} at ${item.company}`}
                title={
                  <div className="flex items-center justify-between gap-4 w-full">
                    {/* Left: Company Logo + Position & Company */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Company Logo */}
                      <div className="w-10 h-10 rounded-full bg-gray-900/50 flex items-center justify-center overflow-hidden shrink-0">
                        {item.image ? (
                          <img
                            src={`/${item.image}`}
                            alt={item.company}
                            className="w-full h-full object-contain p-1.5"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-linear-to-br from-blue-500 to-purple-600" />
                        )}
                      </div>

                      {/* Position and Company */}
                      <div className="flex flex-col items-start">
                        <h3 className="text-white font-medium text-base">{item.position}</h3>
                        <a
                          href={item.companyURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          @{item.company}
                        </a>
                      </div>
                    </div>

                    {/* Right: Date Range */}
                    <div className="text-right text-sm text-gray-500 shrink-0 ml-4">
                      {formatDate(item.startDate)} — {formatDate(item.endDate)}
                    </div>
                  </div>
                }
              >
                {item.achievements.length > 0 ? (
                  <div className="pl-14 pr-0">
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-gray-400 text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-gray-600 shrink-0">•</span>
                          <span dangerouslySetInnerHTML={{ __html: achievement }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
