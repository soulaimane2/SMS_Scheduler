import dotenv from "dotenv"
dotenv.config()
export default {
    definition:{
        openapi: "3.0.3", // present supported openapi version
  info: {
    title: "SMS scheduler API endpoints doumentation", // short title.
    description: "A simple documentation for API endpoints", //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "Soulaimane Negra", // your name
      email: "ng.soulaimane@gmail.com", // your email
      linkedIn: "https://www.linkedin.com/in/soulaimane-n%C3%A9gra-07919621a/", // your website
    },
  },
  servers:[
    {
        url: `http://localhost:${process.env.PORT}/`
    }
],
    },
   

    apis:["./Routes/*.ts"]

}