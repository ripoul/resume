export default {
  main: {
    name: 'Jules Le Bris',
    occupation: 'Full Stack Developper',
    description: 'Open-Source enthusiast, I spend my free time developing for me or the community',
    bio: 'I am a motorcycle fan. Half of my time on the road and the other half looking for new things to learn or develop. I am always looking for new challenge. I love to attend conferences : tech and pizza are the only recipe for a perfect evening.',
    contactmessage: 'Contact me if you have an idee, a question, or any other thing you want to tell me.',
    email: 'jls.lebris@gmail.com',
    phone: '06 24 09 70 37',
    address: {
      street: '12 rue du jeu de paume',
      city: 'Bouguenais',
      zip: '44340',
    },
    image: 'profilepic.jpg',
    // "resumedownload": "http://timbakerdev.com",
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/ripoulNantes',
        className: 'fa fa-twitter',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/jules-le-bris/',
        className: 'fa fa-linkedin',
      },
      {
        name: 'github',
        url: 'http://github.com/ripoul',
        className: 'fa fa-github',
      },
    ],
  },
  resume: {
    education: [
      {
        school: 'EPSI Nantes',
        degree: 'IT Master',
        graduated: 'September 2018 - Present',
        description: 'Management and IT skill developpement (cloud, project management, frameworks, good practice on developpement...)',
      },
      {
        school: 'IUT Nantes',
        degree: "Licence Pro MiAR (Métiers de l'informatique : Applications Réparties)",
        graduated: 'September 2017 - Aout 2018',
        description: 'Developement java, go, python, javascript...',
      },
      {
        school: 'IUT Nantes',
        degree: 'DUT Informatique',
        graduated: 'September 2015 - Aout 2017',
        description: 'Developement java, python, javascript...',
      },
    ],
    work: [
      {
        company: 'Sopra Steria',
        title: 'Dev-Ops Big Data',
        years: 'March 2019 - Present',
        description: 'Ansible, Gitlab, Jenkins. Automation of development process.',
      },
      {
        company: 'Insynium',
        title: 'Full stack developer',
        years: 'April 2017 - February 2019',
        description: 'Setting up a BI platform with Superset and PostgreSQL',
      },
    ],
    skills: [
      {
        name: 'Python',
        level: '90%',
      },
      {
        name: 'Java',
        level: '90%',
      },
      {
        name: 'Javascript',
        level: '70%',
      },
      {
        name: 'PostgreSQL',
        level: '70%',
      },
      {
        name: 'Django',
        level: '80%',
      },
      {
        name: 'Flask',
        level: '75%',
      },
      {
        name: 'ExpressJS',
        level: '70%',
      },
      {
        name: 'Android Studio',
        level: '50%',
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: 'Georide Road-Trip',
        category: 'A web site to share raod trip. Usefull for georide gps tracker user.',
        image: 'georide-road-trip.png',
        url: 'https://georide.ripoul.fr/',
      },
      {
        title: 'Url-Shortener',
        category: 'A web site to shorten url with many provider.',
        image: 'url-shortener.png',
        url: 'https://url-shortener.ripoul.fr/',
      },
      {
        title: 'Url-Shortener-api',
        category: 'The api for my url-shortener',
        image: 'url-shortener-api.png',
        url: 'https://url-shortener.api.ripoul.fr/',
      },
      {
        title: 'this website',
        category: 'My resume',
        image: 'resume.png',
        url: 'https://ripoul.fr/',
      },
    ],
  },
};
