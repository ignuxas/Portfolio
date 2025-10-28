'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { projects, Project } from '@/lib/projectsData';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Chip, useDisclosure } from '@heroui/react';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaGoogleDrive, FaDownload } from 'react-icons/fa';
import ShinyText from './ShinyText';

export default function FeaturedProjects() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  const handleLinkClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSeeMore = () => {
    router.push('/projects');
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 text-emerald-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.27002 6.96L12 12.01L20.73 6.96"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22.08V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ShinyText text="MY WORK" speed={3} className="text-xs tracking-wider" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Selected Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Here&apos;s a curated selection showcasing my expertise and the achieved results.
          </p>
        </div>

        {/* Featured Projects Masonry Layout */}
        <div className="columns-1 md:columns-2 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="cursor-pointer break-inside-avoid mb-12 group" 
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-950 mb-4 w-full transition-transform duration-300 group-hover:scale-[1.02]">
                {project.image && typeof project.image !== 'string' ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image as string}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="w-full aspect-4/3 flex items-center justify-center">
                    <span className="text-gray-600 text-4xl">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Project Info - Outside the card */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
                {project.subTitle && (
                  <p className="text-gray-400 text-sm">{project.subTitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <Button
            onPress={handleSeeMore}
            className="h-14 rounded-full bg-white px-10 text-base font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105"
          >
            See More Projects
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <Modal 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        backdrop="opaque"
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 px-8">
                <h2 className="text-3xl font-bold text-white">{selectedProject?.title}</h2>
                {selectedProject?.subTitle && (
                  <p className="text-emerald-400 text-base font-medium">{selectedProject.subTitle}</p>
                )}
              </ModalHeader>
              <ModalBody className="px-8">
                <div className="space-y-6">
                  {/* Project Image */}
                  {selectedProject?.image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0d0d0d]">
                      {typeof selectedProject.image !== 'string' ? (
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      ) : selectedProject.image ? (
                        <Image
                          src={selectedProject.image as string}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                  )}

                  {/* Description */}
                  {selectedProject?.description && (
                    <div 
                      className="text-[#a8b0d3] text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedProject.description }}
                    />
                  )}

                  {/* Tags */}
                  {selectedProject?.tags && selectedProject.tags.length > 0 && (
                    <div>
                      <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            variant="flat"
                            color="success"
                            size="md"
                            className="font-medium"
                          >
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links Section */}
                  {selectedProject?.links && (selectedProject.links.website || selectedProject.links.github || selectedProject.links.youtube || selectedProject.links.drive || selectedProject.links.download) && (
                    <div>
                      <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Links</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.links.website && (
                          <Button
                            color="success"
                            variant="shadow"
                            size="lg"
                            startContent={<FaExternalLinkAlt className="text-lg" />}
                            onClick={() => handleLinkClick(selectedProject.links.website!)}
                            className="font-semibold shadow-lg shadow-emerald-500/20"
                          >
                            Visit Website
                          </Button>
                        )}
                        {selectedProject.links.github && (
                          <Button
                            color="default"
                            variant="flat"
                            size="lg"
                            startContent={<FaGithub className="text-xl" />}
                            onClick={() => handleLinkClick(selectedProject.links.github!)}
                            className="font-semibold"
                          >
                            GitHub
                          </Button>
                        )}
                        {selectedProject.links.youtube && (
                          <Button
                            color="danger"
                            variant="flat"
                            size="lg"
                            startContent={<FaYoutube className="text-xl" />}
                            onClick={() => handleLinkClick(selectedProject.links.youtube!)}
                            className="font-semibold"
                          >
                            YouTube
                          </Button>
                        )}
                        {selectedProject.links.drive && (
                          <Button
                            color="primary"
                            variant="flat"
                            size="lg"
                            startContent={<FaGoogleDrive className="text-xl" />}
                            onClick={() => handleLinkClick(selectedProject.links.drive!)}
                            className="font-semibold"
                          >
                            Google Drive
                          </Button>
                        )}
                        {selectedProject.links.download && (
                          <Button
                            color="secondary"
                            variant="flat"
                            size="lg"
                            startContent={<FaDownload className="text-xl" />}
                            onClick={() => handleLinkClick(selectedProject.links.download!)}
                            className="font-semibold"
                          >
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter className="px-8">
                <Button 
                  color="default" 
                  variant="light" 
                  onPress={onClose}
                  size="lg"
                  className="font-semibold"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
