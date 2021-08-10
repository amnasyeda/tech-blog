# Tech-Blog

## Description
A blogging application which allows developers to publish posts in their blog and engage in blogs posted by others as well. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tools](#tools)
* [Credits](#credits)
* [License](#license)

## Installation
The user will first clone this repository and have Node.js, Express.js, and MySQL installed on their computer. To install these packages, the user will type `npm install <required-package>` in the command line. The user will then run `mysql -u root -p` in the command line and will be prompted to enter their password. Next, the user will run `source db/schema.sql` in order to create the database on their computer via MySQL. They will then quit mysql and reload the terminal and run `npm start` in order to start the server. 

## Usage
The application will first prompt the user to create an account or log in to their already existing account. Once they have successfully logged in, the user will be prompted to their dashboard in which they can create, edit, or delete posts or view and comment on posts made and posted by others. 

### Edit/Delete a Post:
<img width="887" alt="edit:delete a post" src="https://user-images.githubusercontent.com/81194686/128913097-4022bd06-bd76-4022-aa9f-e103d5c897a4.png">

### Comment on posts by others:
<img width="710" alt="multiple users" src="https://user-images.githubusercontent.com/81194686/128913115-3ae8123e-3176-4537-b99e-9e39cc4d53ab.png">

### All posts are stored:
<img width="710" alt="all posts stored" src="https://user-images.githubusercontent.com/81194686/128913142-a1541c52-2de3-436b-8435-13b490eaebeb.png">

### Deployed Application
* [Go to Site](https://evening-depths-45912.herokuapp.com/)

## Tools
* JavaScript
* node.js
* Sequalize
* Express.js
* MySQL2
* dotenv
* bcrypt
* express-handlebars
* express-session
* connect-session-sequlize

## Credits
* Completed by: [Amna Syeda](https://github.com/amnasyeda)

## License
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[ISC License](https://www.isc.org/licenses/)
