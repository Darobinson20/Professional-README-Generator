const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./page-template');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter name of project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What was your motivation?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'Why did you build this project?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What problem does it solve?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What did you learn?'
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps to install your project?'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide instructions and examples for use.'
    },
    {
      type: 'input',
      name: 'License',
      message: ''
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'How can you contribute to this project? '
    },
    {
      type: 'confirm',
      name: 'Test',
      message: 'Have you tested the project prior to deploying?',
      default: false
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'link',
      name: 'Questions',
      message: 'If you have any additional questions, you can reach me @'
    },


  ]);
};

promptUser()
.then(portfololioData => {
  const pageHTML = generatePage(portfololioData);


fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('README complete! Check out index.html to see your work!');
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
})