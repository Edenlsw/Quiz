import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Eden',
  subtitle: 'I am a Full Stack Developer who currently lives in Birmingham UK.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'eden.png',
  paragraphOne:
    'I’m a focused and hardworking Junior Software Developer looking for an opportunity to develop further. A BootCamp graduate skilled in JavaScript, React, Node JS, Mongo DB, HTML & CSS, Command Line & Git; willing and eager to learn other development technologies.',
  paragraphTwo:
    'I have a strong technical professional with a Bachelor of Arts (BA) focused in Visual & Graphic Communication from Birmingham City University.',
  paragraphThree:
    'Eager not only for the invaluable practical skills and knowledge that my next role will offer but also for the additional development of my analytical thinking skills, problem solving abilities and the confidence to know that I can make a change, these are just as valuable and empowering.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gowander.png',
    title: 'GoWander',
    info:
      'The concept of GoWonder, is a simple way to explore a city. You simply type in your location, add a filter here and there, press the button, and it will generate an activity for you to do based on your filters and preferences.',
    info2: 'The tools used were JavaScript, React, Node JS, MongDB and CSS ',
    // url: '',
    repo: 'https://https://github.com/Edenlsw/black-codher-personal-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bookstore.png',
    title: 'BookStore',
    info:
      'he premise of this project was to create a bookcase which allows users to search and filter through a list of books along with adding and deleting the books from their library. The main data was loaded using a JSON however a google books api was also added allowing the user to search for extra books not listed in the original JSON file.',
    info2: 'The tools used were JavaScript, React, HTML, CSS and Bootstrap',
    url: '',
    repo: 'https://github.com/Edenlsw/BookStore/tree/master/mybookcase', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quiz.png',
    title: 'Hip-Hop Quiz',
    info:
      'The brief for this project was to create a quiz that loops through the array of questions to display the questions and options for the answer. Then to create a function that shows the results, score and changes colour depending on the being correct.',
    info2: 'The tools used were JavaScript, HTML and CSS ',
    url: '',
    repo: 'https://github.com/Edenlsw/Quiz/tree/master/Quiz', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://www.linkedin.com/in/eden-smith-wint/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eden-smith-wint/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://gist.github.com/Edenlsw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
