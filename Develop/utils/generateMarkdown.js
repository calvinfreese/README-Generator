// function to generate markdown for README
const { makeBadge } = require('badge-maker');


//takes data and inputs it into .md file
const generateMarkdown = function(data) {
  //format from badge maker
  const format = {
    label: 'License',
    message: `${data.license}`,
    color: 'green',
  }

  const badge = makeBadge(format);
  const licensePath = `../utils/${data.license}.txt`;

  
  return `
  # Title: ${data.title}
  ## Description 
  ${data.description}
  ${badge}
  #### Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  * [${data.license}](${licensePath})
  
  ## Credits
  ${data.credit}

  ## Tests
  ${data.test}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
