// function to generate markdown for README

const badges = [
  {
    name: "Apache 2.0",
    badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    url: "https://opensource.org/licenses/Apache-2.0"
  },
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    url: "https://opensource.org/licenses/MIT"
  },
  {
    name: "ISC",
    badge: "https://img.shields.io/badge/License-ISC-blue.svg",
    url: "https://opensource.org/licenses/ISC"
  },
  {
    name: "Unlicense",
    badge: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    url: "http://unlicense.org/"
  }
]

//takes data and inputs it into .md file
const generateMarkdown = function(data) {
  
 
 let badge = ''
 let licenseURL = ''
 if (data.license === "MIT") {
   badge = badges[1].badge;
   licenseURL = badges[1].url;
 } else if (data.license === "Apache 2.0") {
   badge = badges[0].badge;
   licenseURL = badges[1].url;
 } else if (data.license === "ISC") {
   badge = badges[2].badge;
   licenseURL = badges[2].url;
 } else {
   badge = badges[3].badge;
   licenseURL = badges[3].url;
 }

  
  return `
  # Title: ${data.title}
  ## Description 
  ${data.description}
  ![License: ${data.license}](${badge})
  #### Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Credits)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  * [${data.license}](${licenseURL}) - click to view license information.

  
  ## Credits
  ${data.credit}

  ## Tests
  ${data.test}

  ## Questions
  If there are any questions regarding this project, please reach me at:
   * GitHub: [${data.github}](https://github.com/${data.github})
   * Click to [Email Me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
