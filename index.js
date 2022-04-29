// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'Title',
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
  name: 'Description',
  message: 'What was your motivation?'
},
{
  type: 'input',
  name: 'Description',
  message: 'Why did you build this project?'
},
{
  type: 'input',
  name: 'Description',
  message: 'What problem does it solve?'
},
{
  type: 'input',
  name: 'Description',
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
  message: 'What license did you use?'
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