// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: "What is the name of your project? (Required)",
  validate: nameInput => {
    if (nameInput){
      return true;
    } else {
      console.log('Please enter name of project!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'Please provide a breif description of your project?'
},
{
  type: 'input',
  name: 'installation',
  message: 'What was needed to install your project?'
},
{
  type: 'checkbox',
  name: 'usage',
  message: 'What languages were used in your project?',
  choices: ['Javascript', 'HTML','CSS','ES6', 'jQuery','Node']
},
{
  type: 'input',
  name: 'license',
  message: 'What license did you use?'
},
{
  type: 'input',
  name: 'contributing',
  message: 'Who contributed to this project? '
},
{
  type: 'input',
  name: 'test',
  message: 'Have you tested the project prior to deploying? (y/N)'
},
{
  type: 'input',
  name: 'questions',
  message: 'Enter your GitHub Username'
},
{
  type: 'link',
  name: 'questions',
  message: 'If you have any additional questions, you can reach me @'
}

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, err => {
    if (err) throw err;

    console.log('README complete!');
   });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile('README.md', generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();