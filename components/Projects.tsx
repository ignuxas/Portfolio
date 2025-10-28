'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects, Project } from '@/lib/projectsData';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Chip, useDisclosure } from '@heroui/react';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaGoogleDrive, FaDownload } from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  const handleLinkClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-emerald-400 text-sm font-medium mb-2 tracking-wider">✦ MY WORK</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Selected Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here&apos;s a curated selection showcasing my expertise and the achieved results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Project Image */}
              <div
                onClick={() => handleProjectClick(project)}
                className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-900 mb-4"
              >
                {project.image && typeof project.image !== 'string' ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image as string}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-600 text-4xl">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Project Info - Outside the card */}
              <div className="px-1">
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                {project.subTitle && (
                  <p className="text-gray-400 text-sm">{project.subTitle}</p>
                )}
              </div>
            </div>
          ))}
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
