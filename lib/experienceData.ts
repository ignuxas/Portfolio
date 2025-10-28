export interface ExperienceItem {
  position: string;
  company: string;
  companyURL: string;
  image?: string;
  achievements: string[];
  glowClass: string;
  startDate: string;
  endDate: string;
}

export const experience: ExperienceItem[] = [
  {
    position: 'AI Specialist & Full-Stack Web Developer',
    company: 'MeritStory',
    companyURL: 'https://www.linkedin.com/company/meritstory/mycompany/',
    image: 'experience_images/meritstory64.png',
    achievements: [
      'Helped develop a web application for governmment held contest management and participation',
      'Developed a web application for promoting company services and products',
      'Worked in a team setting and used best practices to deliver high-quality software',
      'Worked with Next.js, React.js, TypeScript, Tailwind.css, AWS, Serverless technology, Github, SQL, Prisma, SupaBase and Jira',
    ],
    glowClass: 'whiteGlow',
    startDate: '2024-10-01',
    endDate: 'Current',
  },
  {
    position: 'Web Development Intern',
    company: 'MeritStory',
    companyURL: 'https://www.linkedin.com/company/meritstory/mycompany/',
    image: 'experience_images/meritstory64.png',
    achievements: [],
    glowClass: 'whiteGlow',
    startDate: '2024-07-26',
    endDate: '2024-09-31 (2 months)',
  },
  {
    position: 'Co-Founder & Lead Developer',
    company: 'Thunderclap Labs',
    companyURL: 'https://www.linkedin.com/company/thunderclap-labs/',
    image: 'experience_images/tcl64.png',
    achievements: [
      "Gathered The greatest team of engineers to develop and launch innovative software projects that push the boundaries of technology and creativity.<span> - <a href=\"https://thunderclaplabs.com/\" class=\"aBlue\" target=\"_blank\">Website</a></span>",
      "Spearheaded the development of a drone detection system utilizing epipolar geometry for enhanced aerial security.",
      "Engineered and developed the 'Thunderbee Drone Interceptor,' an award-winning project at the EUDIS hackathon, integrating rapid prototyping with AI-driven target recognition.",
      "Contributed to the design and development of an automated rocket fuel manufacturing system, incorporating Industrial IoT for real-time monitoring and quality control.",
      "Involved in creating advanced reusable rocket systems, focusing on innovative propulsion, lightweight structures, and sophisticated avionics.",
      "Worked on drone-based and rocket-based cloud seeding systems for weather modification applications.",
      "Secured multiple awards, including being <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7384553503119187968\" class=\"aBlue\" target=\"_blank\">Official Global Nominees in the NASA Space Apps challenge</a> and winning prizes from <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7350593089859735553\" class=\"aBlue\" target=\"_blank\">EUDIS (€5k)</a>, <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7386130502685986816\" class=\"aBlue\" target=\"_blank\">Kickstart Lab (€5k)</a>, and <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7384953212753068032\" class=\"aBlue\" target=\"_blank\">Jaunaragiai (€1k)</a>.",
    ],
    glowClass: 'whiteGlow',
    startDate: '2023-07-01',
    endDate: 'Current',
  },
  {
    position: 'Web Development Intern',
    company: 'Teltonika Networks',
    companyURL: 'https://www.linkedin.com/company/teltonika-networks/',
    image: 'experience_images/Teltonika64x64.png',
    achievements: [
      'Designed and developed a robust web application tailored for efficient management and real-time monitoring of company contacts<span> - <a href="https://github.com/ignuxas/part-5" class="aBlue" target="_blank">GitHub</a></span>',
      'Designed and executed a dynamic web application that offers comprehensive capabilities for the management and real-time monitoring of IoT devices<span> - <a href="https://github.com/ignuxas/vuci" class="aBlue" target="_blank">GitHub</a></span>',
      'Wrote unit tests for multiple web applications',
      'Worked with Vue.js, Node.js, JavaScript, Tailwind.css, Linux, PocketBase, and GitLab',
    ],
    glowClass: 'blueGlow',
    startDate: '2023-07-03',
    endDate: '2023-08-31 (2 months)',
  },
];
