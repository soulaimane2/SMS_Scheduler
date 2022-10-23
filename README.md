<!-- PROJECT LOGO -->
<br />
<p align="center">

  <!-- <h3 align="center">Social</h3> -->

  <p align="center">
    A nodejs app that schedule sms sending
    <br />
    <br />
    <br />
    ·
    <a href="https://github.com/soulaimane2/SMS_Scheduler/issues">Report Bug</a>
    ·
    <a href="https://github.com/soulaimane2/SMS_Scheduler/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
It's a Web Coding Challenge to implement a SMS scheduler to send SMSs and checking their status

### Features
- Schedule a SMS sending
- Create and run a schedule at the same time
- Check the SMS status and update it until it's not ACCEPTD
- Get the list of schedules with the message sent
- Get the list of SMSs with their status
- Schedules and SMSs can be filtred by date and status


### Built With
* [MongoDB](https://mongoosejs.com/)
* [Mongoose](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [NodeJs](https://nodejs.org/en/)
* [Axios](https://axios-http.com/)
* [Cron](https://www.npmjs.com/package/cron)
* [momentjs](https://momentjs.com/)


<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running there are 2 ways (docker or manually)

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* docker

### Installation

1. Get a Mongo URI from [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/soulaimane2/SMS_Scheduler
   ```
   #### install and run(Manually) 
3. Install NPM packages 
   ```sh
   npm install
   ```
4. create a `.env` file 
5. Enter your Mongo URI in `.env`
   ```
   DB_STRING=[your Mongo URI]
   PORT=[PORT]
   ```

6. run the Server
  ```sh
   npm start
   ```
   #### use Docker

3. create a `.env` file 
4. Enter your Mongo URI in `.env`
   ```
   DB_STRING=[your Mongo URI]
   PORT=[PORT]
   ```
5. make sure you have DOCKER installed and running to start building the image

    ```sh
    docker build . -t [Container tag]
    ``` 
6.run the container

    ```sh
    docker run -p [port you want to expose]:[port specified in the .env file] [Container tag]
    ```

### IMPORTANT!

  make sure you create the .env file with db DB_STRING and PORT

<!-- USAGE EXAMPLES -->
## Usage

Sending messages based on schedule

## TODO
    - TYPING the project
    - refactoring some code
    - Optimize the tests
    - Configure the Github action CI to run tests on push


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

My Name - [Soulaimane Négra](https://www.linkedin.com/in/soulaimane-n%C3%A9gra-07919621a/) 

Project Link: [https://github.com/soulaimane2/SMS_Scheduler/](https://github.com/soulaimane2/SMS_Scheduler/)



