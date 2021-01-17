# React User Registration Frontend

This Repository contains a Project which has the React Frontend for User Login & Signup.\
This Project is created using a Modular approach, where various functionalities are divided into various Components & Pages.

> # Backend/Data-Source:

The Backend/Data-Source for User Authentication is located at:\
https://node-authenticate-backend-demo.herokuapp.com/

This Backend Project is created & uploaded on:\
https://github.com/KHardik1698/AuthenticationBackendDemo.git

> # Navigation:

**http://localhost:3000/** will be the Home Page for User Registration.\
**http://localhost:3000/login** will be the Login Page for existing User.\
**http://localhost:3000/signup** will be the Signup Page for new User.

> # Folder Structure:

Each Components or Pages Module has it's own Folder by the name of the Component.\
The Folder contains the main index.js file & index.module.css style file.

> # Api Calls Component:

This File contains the Backend Link from where the data will be fetched.

> # Components:

The Components Folder contains all the smaller Components which contains some small parts of the entire Project, which are common to multiple pages.\
It contains Loading Component, Header Component & Footer Component.\
The Loading Component contains a Loading Spinner, which is created using the **react-loader-spinner** Library.\
The Header Component contains a Header Logo & Navigation Links to various Pages.\
The Header Component can generate dynamic Navigation Links based on the current Page.\
The Footer Component contains Copyright Information & Social Media Icons, which are created using **react-icons** Library.

> # Images:

The Images Folder contains all the Images needed for the Website.\
Currently, there is only the Header Logo in this Folder.

> # Pages:

The Pages Folder contains all the Pages Components to be served for any given URL Route.\
It contains Index Page Component, Login Page Component, Signup Page Component & Not Found Component.\
It also contains Home Page Component but it is not accessible via URL, but it is accessed once the User is Logged In.\
The Index Page & Home Page Component contains the Component which will have some informative Text in it.\
It contains Header Component & Footer Component.\
The Login Page Component contains the Component which will have the Login Form in it.\
It contains Loading Component, Header Component, Footer Component & Home Page Component.\
It renders the Home Page Component once the User is Logged in.\
The Signup Page Component contains the Component which will have the Signup Form in it.\
It contains Loading Component, Header Component & Footer Component.\
The Not Found Component contains a 404 Page Not Found Image as well as a Button to go back to the Index Page.

> # Routers:

The Routers Folder contains the Router File which has all the Valid Routes which are to be used on the Website.\
Also, it maps which component will be used for which Route.

> # Styles:

Each Components or Pages Module contains it's own Module CSS File for Styling.

> # Demo:

The Project is Hosted on Vercel.\
This will be the Home Page for User Registration.\
**https://react-user-login-signup.vercel.app/**
