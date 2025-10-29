export interface TechStack {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  date: string;
  image: string;
  techStack: TechStack[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 'futureguide',
    name: 'FutureGuide',
    description: 'A comprehensive backend platform built with modern microservices architecture, featuring AI integration, real-time messaging, and scalable cloud infrastructure for intelligent guidance systems.',
    role: 'Backend Developer, AI Engineer',
    date: 'October 2025 - Present',
    image: '/projects/futureguide.webp',
    techStack: [
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Hono.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hono/hono-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Docker Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
      { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
      { name: 'Google Gemini', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'OpenRouter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg' }
    ]
  },
  {
    id: 'aureavoice',
    name: 'AureaVoice',
    description: 'An AI-powered accent analysis and training platform that helps English learners improve their pronunciation by analyzing their speech patterns and providing confidence scores for US accent detection.',
    role: 'Fullstack Engineer, AI Engineer',
    date: 'July 2025 - September 2025',
    image: '/projects/aureavoice.webp',
    techStack: [
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'SpeechBrain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Torchaudio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      { name: 'IndexedDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ],
    link: 'https://github.com/rayinailham/av-frontend'
  },
  {
    id: 'pomodoro',
    name: 'Pomodoro Timer',
    description: 'A modern, feature-rich Pomodoro Timer application built with vanilla JavaScript following MVP architecture pattern with customizable settings, background music, and beautiful visual design.',
    role: 'Frontend Developer',
    date: 'June 2025',
    image: '/projects/pomodoro.webp',
    techStack: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      { name: 'Howler.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Web Workers', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PWA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
    ]
  },
  {
    id: 'anevia',
    name: 'Anevia',
    description: 'Eye Conjunctiva Scanning System for Anemia Detection - An innovative healthcare solution that uses AI-powered image analysis to detect potential anemia through eye conjunctiva scans.',
    role: 'Backend Developer, AI Engineer',
    date: 'May 2025 - June 2025',
    image: '/projects/anevia.webp',
    techStack: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Hapi.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hapi/hapi-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Google Gemini', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Uvicorn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
    ]
  },
  {
    id: 'ldtp',
    name: 'LDTP Media',
    description: 'Loughshinny Dublinn Travel Post - A travel story sharing platform where users can share their travel experiences with interactive maps and media.',
    role: 'Frontend Developer',
    date: 'May 2025',
    image: '/projects/ldtp.webp',
    techStack: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Leaflet', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg' },
      { name: 'MapTiler', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mapbox/mapbox-original.svg' },
      { name: 'PWA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
      { name: 'IndexedDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg' }
    ]
  }
];