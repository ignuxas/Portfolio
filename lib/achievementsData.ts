export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  details: string[];
  link?: string;
  date: string;
  icon?: string;
}

export const achievements: AchievementItem[] = [
  {
    title: 'NASA Space Apps Challenge - Official Global Nominee',
    category: 'Competition',
    description: 'Developed an innovative solution for space exploration and achieved recognition as an Official Global Nominee in the prestigious NASA Space Apps Challenge.',
    details: [
      'Competed against thousands of teams worldwide in the NASA Space Apps Challenge',
      'Achieved Official Global Nominee status, representing the top solutions globally',
      'Demonstrated expertise in space technology and innovative problem-solving',
      '<a href="https://www.linkedin.com/feed/update/urn:li:activity:7384553503119187968" class="text-blue-400 hover:text-blue-300 transition-colors" target="_blank">View announcement →</a>',
    ],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7384553503119187968',
    date: '2025',
    icon: 'rocket_launch',
  },
  {
    title: 'EUDIS Hackathon Winner - €5,000',
    category: 'Hackathon',
    description: 'Won the EUDIS hackathon with the Thunderbee Drone Interceptor, an AI-driven drone detection and interception system.',
    details: [
      "Developed the 'Thunderbee Drone Interceptor' using AI-driven target recognition",
      'Integrated epipolar geometry for enhanced drone detection and tracking',
      'Secured €5,000 in prize money for innovative aerial security solution',
      'Demonstrated rapid prototyping and advanced engineering capabilities',
      '<a href="https://www.linkedin.com/feed/update/urn:li:activity:7350593089859735553" class="text-blue-400 hover:text-blue-300 transition-colors" target="_blank">View announcement →</a>',
    ],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7350593089859735553',
    date: '2025',
    icon: 'emoji_events',
  },
  {
    title: 'Kickstart Lab Winner - €5,000',
    category: 'Competition',
    description: 'Won €5,000 at the Kickstart Lab competition for innovative technology solutions and entrepreneurial excellence.',
    details: [
      'Competed in the Kickstart Lab startup competition',
      'Presented innovative technology solutions to industry judges',
      'Awarded €5,000 for exceptional project and business potential',
      '<a href="https://www.linkedin.com/feed/update/urn:li:activity:7386130502685986816" class="text-blue-400 hover:text-blue-300 transition-colors" target="_blank">View announcement →</a>',
    ],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7386130502685986816',
    date: '2025',
    icon: 'lightbulb',
  },
  {
    title: 'Jaunaragiai Competition Winner - €1,000',
    category: 'Competition',
    description: 'Secured first place and €1,000 prize at the Jaunaragiai youth innovation competition.',
    details: [
      'Won the Jaunaragiai youth innovation competition',
      'Demonstrated exceptional engineering and innovation skills',
      'Awarded €1,000 for outstanding project development',
      '<a href="https://www.linkedin.com/feed/update/urn:li:activity:7384953212753068032" class="text-blue-400 hover:text-blue-300 transition-colors" target="_blank">View announcement →</a>',
    ],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7384953212753068032',
    date: '2025',
    icon: 'stars',
  },
  {
    title: 'Google Bug Bounty - Honorable Mentions',
    category: 'Security',
    description: 'Achieved prestigious placement on the Google Bug Bounty Honorable Mentions List for cybersecurity contributions.',
    details: [
      'Discovered and responsibly disclosed security vulnerabilities',
      'Recognized by Google for contributions to platform security',
      'Demonstrated expertise in cybersecurity and ethical hacking',
      '<a href="https://bughunters.google.com/leaderboard/honorable-mentions" class="text-blue-400 hover:text-blue-300 transition-colors" target="_blank">View leaderboard →</a>',
    ],
    link: 'https://bughunters.google.com/leaderboard/honorable-mentions',
    date: '2023',
    icon: 'security',
  },
];
