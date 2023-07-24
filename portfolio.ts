import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Shamsul Arefin',
  title: "Full Stack Developer",
  description:
    "Experienced Software developer with expertise in Backend Services\
     with Python, Nodejs with CI/CD Pipeline integrations,\
     DevOps tools including Docker, Jenkins, AWS Kubernetes Services,\
     and React.js, Vue.js frontend frameworks.",
  resumeLink:
    'https://drive.google.com/file/d/1sLBDHlyJ3zIyablzlGwHYxjzlMFE5fd_/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'sajib-4414',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://sajib-4414.github.io/',
  linkedin: 'https://www.linkedin.com/in/shamsul-arefin/',
  github: 'https://github.com/sajib-4414',
  
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'ENTHUSIAST SOFTWARE DEVELOPER WHO WANTS TO BRING IN INNOVATION WITH TECHNOLOGIES',
  data: [
    {
      title: 'Backend Software Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building scalable and performant backend REST API services with Django and Nodejs'
        ),
        emoji('⚡ Build applications leveraging microservices, authentication and security, and event driven architectures'),
        emoji('⚡ Utilizing SQL and NoSQL databases (PostgreSQL,MySQL, MongoDB) with efficient Query Optimized models & ORM, ODM Layers'),
      ],
      softwareSkills: [
        
        
        // {
        //   skillName: 'Reactjs',
        //   fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        // },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'logos:nodejs',
        },
        {
          skillName: 'Microservices',
          fontAwesomeClassName: 'carbon:microservices-1',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'devicon:mongodb',
        },
      ],
    },
    {
      title: 'DevOps technologies',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Integrated CI/CD Pipelines with Jenkins, AWS CodePipeline, Githubworkflow and Docker'),
        emoji(
          '⚡ Deployed full stack applications to AWS Kubernetes Clusters via CI/CD Pipelines with Prometheus, Grafana Monitoring tools'
        ),
        emoji(
          '⚡ Utilized Amazon Services including Lambda, SQS, SNS, EventBridge for event driven application design.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'skill-icons:docker',
        },
        {
          skillName: 'Git',
          fontAwesomeClassName: 'fa6-brands:git',
        },
        {
          skillName: 'Jenkins',
          fontAwesomeClassName: 'vscode-icons:file-type-jenkins',
        },
        {
          skillName: 'Kubernetes',
          fontAwesomeClassName: 'skill-icons:kubernetes',
        },
        {
          skillName: 'Grafana',
          fontAwesomeClassName: 'skill-icons:grafana-dark',
        },
        {
          skillName: 'Lambda',
          fontAwesomeClassName: 'logos:aws-lambda',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Apache',
          fontAwesomeClassName: 'devicon:apache-wordmark',
        }
        
      ],
    },
    {
      title: 'Frontend development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Highly skilled Frontend Developer with bold expertise in ReactJS and VueJS frameworks.'
        ),
        emoji(
          '⚡ Extensive experience in state management, utilizing VuexStore (VueJS) and Redux (React) to create efficient data flows.'
        ),
        emoji(
          '⚡ Developed cutting-edge applications with Module federation and Webpack for extreme reusability and optimal performance'
        ),
        emoji('⚡ Known for crafting reusable components for complex projects that drive productivity and ensure maintainability.'),
        
      ],
      softwareSkills: [
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'skill-icons:react-dark',
        },
        {
          skillName: 'Vuejs',
          fontAwesomeClassName: 'devicon:vuejs',
        },
        {
          skillName: 'HTML',
          fontAwesomeClassName: 'skill-icons:html',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'devicon:javascript',
        },
        {
          skillName: 'Webpack',
          fontAwesomeClassName: 'devicon:webpack',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'DevOps',
    progressPercentage: '80',
  },
  {
    Stack: 'Frontend',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Regina',
    subHeader: 'Master of Science in Computer Science',
    duration: 'September 2019 - December 2021',
    desc: 'Important courses: Data Science, Data Analytics, Software Development, Computer Security',
    grade: '83.5%',
    descBullets: [
      'Built a NLP model based conversation emotion predictor',
      'Developed Image encryption tool with 3 stage encryption',
      'Developed Assignment tracker application with Django, ReactJS, MySQL',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Programmer Analyst Software Development Support',
    company: 'University of Regina',
    companyLogo: '/img/icons/common/uregina icon.jpg',
    date: 'Jan 2022 – Present',
  descBullets:['Developed robust & scalable microservices with Django backend with CI/CD Pipelines.',
    'Contributed to a microservice-based application with Ruby on Rails, Vue.JS technologies',
    'Deployed applications to AWS EC2, on premise Linux, and CI/CD pipelines to achieve 90% uptime.',
    'Utilized React.JS and Vue.JS to design and implement cutting edge, high performance user interface.',
    'Leveraged Agile, Scrum principles and handled end-to-end delivery of projects.']
  },
  {
    role: 'Software Engineer',
    company: 'Binate Solutions',
    companyLogo: '/img/icons/common/binate-image.png',
    date: 'Dec 2016 - Aug2019',
    descBullets:['Developed distributed microservice based backend applications with django to serve 10k products. ',
      'Utilized RabbitMQ, Celery, and Jenkins CI/CD Pipelines with Docker for optimized production deployment',
      'Ensured the quality code with Code reviews, Test driven Development, extensive Testing',
    'Enagaged in requirement gathering, architectural design, development, deployment and maintenance',
    'Leveraged Reactjs to successfully consolidate legacy frontend code into highly resuable, performant Frontend applicaton.']
  },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
];

export const projects: ProjectType[] = [
  {
    name: 'Exercise goal tracker(MERN)',
    descBullets: ['Nodejs, React, MongoDB, AWS CI/CD, Kubernetes deployment, Route53 with SSL, Prometheus & Grafana monitoring.',
      ' Allows user to create and track daily/monthly exercise goals with summary report'],
    github: 'https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack',
    // link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'Tech discussion forum(Django)',
    descBullets: ['Backend application with Django REST, Postgres SQL, OAuth2.0, Docker, AWS CodePipeline CI/CD.',
    ' Allows user to post, comment,reply on different tech channels.'],
    github: 'https://github.com/sajib-4414/BlogApp-BackEnd',
  },
  {
    name: 'Social network (Django,Flask)',
    descBullets: ['Fullstack application with Django REST, Flask, React, RabbitMQ, MySQL, Docker, Jenkins CI/CD',
    ' Allows user to post on channels with photos, like, comment, reply'],
    github: 'https://github.com/sajib-4414/Django-Microservices-with-Flask',
  },
  {
    name: 'Ecommerce Microfrontend(React, Vue)',
    descBullets: ['Microfrontend architecture, React, Vue, Webpack, Module Federation, Github Actions CI/CD, AWS S3, Cloudfront.',
    'Allows admin user to upload products, and consumers to browse, add to cart, create order'],
    github: 'https://github.com/sajib-4414/react-microfront-end-with-aws-cicd',
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Shamsul Arefin',
  description:
    'A passionate Full Stack Web and DevOps developer',
  author: 'Shamsul Arefin',
  image: 'https://avatars.githubusercontent.com/u/10176810?s=400&u=aac9e57bbc0f94a994588a53173ad958b333b2d1&v=4',
  url: 'https://sajib-4414.github.io',
  keywords: [
    'Shamsul',
    'Shamsul Arefin',
    '@sajib-4414',
    'sajib-4414',
    'Portfolio',
    'Shamsul Portfolio ',
    'Shamsul Arefin Portfolio',
  ],
};
