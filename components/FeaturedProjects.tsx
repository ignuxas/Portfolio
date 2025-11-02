'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/projectsData';
import { FaGithub, FaYoutube, FaGlobe, FaGoogleDrive, FaDownload } from 'react-icons/fa';
import { Button } from '@heroui/react';
import ShinyText from './ShinyText';
import SplitText from './SplitText';
import AOS from 'aos';

const FEATURED_PROJECT_COUNT = 4;
const OTHER_PROJECTS_INITIAL = 6;

export default function FeaturedProjects() {
  const [showMore, setShowMore] = useState(false);
  
  useEffect(() => {
    // Refresh AOS when showMore changes to animate new items
    if (showMore) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [showMore]);

  const featuredProjects = projects.filter((_, index) => index < FEATURED_PROJECT_COUNT);
  const otherProjects = projects.filter((_, index) => index >= FEATURED_PROJECT_COUNT);
  
  const displayedOtherProjects = showMore 
    ? otherProjects 
    : otherProjects.slice(0, OTHER_PROJECTS_INITIAL);

  const getFadeDir = (index: number, type: 'image' | 'text' = 'text') => {
    if (type === 'image') {
      return index % 2 === 0 ? 'fade-right' : 'fade-left';
    }
    return index % 2 === 0 ? 'fade-left' : 'fade-right';
  };

  const getIconForLink = (key: string) => {
    switch (key) {
      case 'drive':
        return <FaGoogleDrive className="w-5 h-5" />;
      case 'github':
        return <FaGithub className="w-5 h-5" />;
      case 'youtube':
        return <FaYoutube className="w-5 h-5" />;
      case 'website':
        return <FaGlobe className="w-5 h-5" />;
      case 'download':
        return <FaDownload className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <>
      <style jsx>{`
        @media screen and (max-width: 1200px) {
          #projectShowcase > div {
            flex-direction: column !important;
            align-items: center !important;
            margin-bottom: 0 !important;
          }
          
          #projectShowcase > div > div:first-child {
            width: 100% !important;
            text-align: center !important;
            margin-left: 0 !important;
          }

          #projectShowcase > div > div:first-child > div {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          #projectShowcase > div > div:first-child img {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          #projectShowcase > div > div:last-child {
            width: 100% !important;
            position: relative !important;
            left: 0 !important;
            right: 0 !important;
          }
        }

        @media screen and (max-width: 768px) {
          .card {
            overflow: visible !important;
          }
          
          .multi-button {
            position: absolute !important;
            top: -10px !important;
            left: 50% !important;
            transform: translateX(20px) !important;
            width: auto !important;
            height: auto !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 0 !important;
            opacity: 0 !important;
            transition: all 250ms ease !important;
            pointer-events: none !important;
          }
          
          .card:hover .multi-button {
            opacity: 1 !important;
            gap: 20px !important;
            pointer-events: auto !important;
          }
          
          .multi-button a {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            transform: none !important;
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
      <div className="relative z-10 w-full bg-black py-24">
        {/* Featured Projects Section */}
        <section id="featured" className="max-w-7xl mx-auto px-6 mb-24">
        <div data-aos="fade-right">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-5 text-cyan-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ShinyText text="FEATURED PROJECTS" speed={3} className="text-xs tracking-wider" />
          </div>
          <SplitText 
            text="Some Things I've Built" 
            tag="h2" 
            className="text-4xl font-bold text-white mb-10"
            textAlign="left"
            splitType="chars"
            delay={20}
            duration={0.4}
            threshold={0.1}
            rootMargin="0px"
          />
        </div>

        <div id="projectShowcase" className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              id={`FeaturedProject${index}`}
              className={`relative flex justify-center items-center flex-col mb-24 ${
                index % 2 === 0 ? 'text-right' : 'text-left'
              }`}
            >
              {/* Project Image Wrapper */}
              <div className="flex w-full">
                <div
                  className={`w-[60%] max-h-[400px] ${
                    index % 2 === 0 ? 'text-left' : 'text-right ml-auto'
                  }`}
                  data-aos={getFadeDir(index, 'image')}
                  data-aos-anchor={`#FeaturedProject${index}`}
                >
                  <a
                    href={project.mainLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`View ${project.title} project`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg max-w-full max-h-full object-cover"
                    />
                  </a>
                </div>
              </div>

              {/* Project Properties */}
              <div
                className={`absolute flex flex-col gap-2.5 mb-5 top-0 pt-8 w-[55%] ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                }`}
              >
                <div
                  data-aos-anchor={`#FeaturedProject${index}`}
                  data-aos={getFadeDir(index)}
                  data-aos-delay="50"
                >
                  <ShinyText 
                    text={project.subTitle || 'Featured Project'} 
                    speed={3} 
                    className="text-xs tracking-wider font-mono"
                  />
                </div>

                <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} justify-between w-full`}>
                  <h3
                    className="text-[32px] font-bold text-white mt-0"
                    data-aos-anchor={`#FeaturedProject${index}`}
                    data-aos={getFadeDir(index)}
                    data-aos-delay="100"
                  >
                    {project.mainLink ? (
                      <a
                        href={project.mainLink}
                        className="text-white hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </h3>

                  <div className="flex gap-2.5 items-start">
                    {Object.keys(project.links).map((key, keyIndex) => {
                      const url = project.links[key as keyof typeof project.links];
                      if (!url) return null;
                      return (
                        <div
                          key={`${index}-${key}`}
                          className="relative flex justify-center items-center w-[34px] h-[34px] rounded-full bg-gray-900 border border-gray-800"
                          data-aos="fade-up"
                          data-aos-delay={200 + 50 * keyIndex}
                        >
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full h-full text-gray-400 hover:text-cyan-500 transition-colors"
                          >
                            {getIconForLink(key)}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="text-left text-base bg-gray-900 border border-gray-800 rounded-lg p-5 shadow-lg"
                  data-aos-anchor={`#FeaturedProject${index}`}
                  data-aos={getFadeDir(index)}
                  data-aos-delay="150"
                >
                  <p
                    className="text-gray-400"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </div>

                <div
                  className={`flex flex-wrap gap-5 row-gap-0 w-full mt-4 text-sm font-mono ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={`featured-${index}-${tag}`}
                      className="text-gray-400"
                      data-aos-delay={tagIndex * 50}
                      data-aos="fade-down"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="otherProjects" className="max-w-7xl mx-auto px-6">
        <div data-aos="fade-down">
          <SplitText 
            text="Other Noteworthy Projects" 
            tag="h2" 
            className="text-3xl font-bold text-white mb-12 text-center"
            textAlign="center"
            splitType="chars"
            delay={20}
            duration={0.4}
            threshold={0.1}
            rootMargin="0px"
          />
        </div>

        <div id="otherProjectShowcase" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayedOtherProjects.map((project, index) => {
            return (
              <div
                key={FEATURED_PROJECT_COUNT + index}
                className="card flex flex-col relative bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="400"
              >
              {project.image && (
                <div className="absolute w-full h-full top-0 left-0 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="absolute z-2 top-0 left-0 w-full h-full opacity-5 object-cover"
                  />
                </div>
              )}

              <div className="relative z-2 text-2xl font-bold text-white mb-4">
                {project.title}
              </div>

              <p
                className="relative z-2 text-base text-gray-400 mb-4"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              <div className="flex z-2 items-end h-full flex-wrap gap-5 text-sm font-mono text-gray-400">
                {project.tags.map((tag, tagIndex) => (
                  <div key={`other-${FEATURED_PROJECT_COUNT + index}-${tag}`}>
                    {tag}
                  </div>
                ))}
              </div>

              <div className="absolute z-1 w-full h-full rounded-lg top-0 left-0 bg-gray-900 select-none" />

              <div className="multi-button absolute z-0 top-5 left-5 rounded-full w-0 h-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)]">
                {project.links.drive && (
                  <a
                    href={project.links.drive}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on Google Drive"
                    className="flex items-center justify-center absolute w-8 h-8 border-none rounded-full m-0 bg-gray-900 border border-gray-800 text-gray-400 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] shadow-lg hover:bg-gray-800 hover:text-cyan-500 hover:shadow-xl"
                  >
                    <FaGoogleDrive className="w-5 h-5" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                    className="flex items-center justify-center absolute w-8 h-8 border-none rounded-full m-0 bg-gray-900 border border-gray-800 text-gray-400 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] shadow-lg hover:bg-gray-800 hover:text-cyan-500 hover:shadow-xl"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on YouTube"
                    className="flex items-center justify-center absolute w-8 h-8 border-none rounded-full m-0 bg-gray-900 border border-gray-800 text-gray-400 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] shadow-lg hover:bg-gray-800 hover:text-cyan-500 hover:shadow-xl"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit website"
                    className="flex items-center justify-center absolute w-8 h-8 border-none rounded-full m-0 bg-gray-900 border border-gray-800 text-gray-400 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] shadow-lg hover:bg-gray-800 hover:text-cyan-500 hover:shadow-xl"
                  >
                    <FaGlobe className="w-5 h-5" />
                  </a>
                )}
                {project.links.download && (
                  <a
                    href={project.links.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download"
                    className="flex items-center justify-center absolute w-8 h-8 border-none rounded-full m-0 bg-gray-900 border border-gray-800 text-gray-400 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] shadow-lg hover:bg-gray-800 hover:text-cyan-500 hover:shadow-xl"
                  >
                    <FaDownload className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 bg-transparent border-2 border-gray-700 text-white rounded-full font-semibold text-sm backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
            variant="bordered"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      </section>
      </div>
    </>
  );
}
