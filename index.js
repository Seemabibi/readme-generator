// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create a function to write README file
function writeToFile (template) {    

    fs.writeFileSync("README.md", template, (error) =>
     error ? console.log('error') : console.log('done'));
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'what is your Github username?',
            name: 'github_name',
            
        },

        {
            type: 'input',
            message: 'Please provide a link to your Github profile',
            name: 'github_profile_link',
            
        },

        {
            type: 'input',
            message: 'Please enter your email',
            name: 'email',
            
        },
        
        {
            type: 'input',
            message: 'what would you like you project title to be called?',
            name: 'title',
            
        },
    
        {
            type: 'input',
            message: 'Provide a brief description of your project',
            name: 'description',
        },
    
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'initialisation',
            
        },
    
        {
            type: 'input',
            message: 'Provide example video (please provide the link to the video)',
            name: 'usage',
            
        },
    
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles',
            name: 'contributing',
            
        },
        
        {
            type: 'input',
            message: 'If any tests were run please provide examples and explanations (if not enter N/A)',
            name: 'test_instructions',
            
        },

    
        {
            type: 'list',
            message: 'which license has been used?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            name: 'license',
            
        },
        
        
    ])
        .then(response => {
           const markdown = generateMarkdown(response)
           writeToFile(markdown)
        })

}
// Function call to initialize app
init();