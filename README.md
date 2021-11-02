# LodeStar 

=== About ===

  Who's currently in space and what spacecraft are they on? Want to check out where the ISS is currently located? Sign in to LodeStar to find out! 

=== Live Site ===

https://lodestar-app.netlify.app
* Note
API fetch will not work on this live site since Notify API is an insecure site.
Browser will block request from https to http.
Will need to find new API source for production.

=== Technologies ===

* ReactJS
* Node.js
* Firebase 
* React Router
* Open Notify API 
* Leaflet 
* Netlify
* React Bootstrap

=== Setup ===

### Requirements:

* Yarn installed globally
npm -g yarn

* You’ll need to have Node 14.0.0 or later version on your local development machine

### Setup

1. Clone repo on local machine

2. run yarn install 
- installs dependencies
(e.g. firebase, react-bootsrap, leaflet, etc)

3. configure firebase account
Add Project
- add a firebase project (https://firebase.google.com/)
- project name can be any name of your choosing
- disable google analytics and click "create project"
-> authentication (left side bar)
-> Get started
-> add Google for sign-in method
-> Enable Google 
-> add email address
Register App to get config variables
-> Go to settings (gear in left side bar)
-> Project settings
-> Your apps (bottom of general settings)
-> Add web </>
-> Register app
-> input config settings into dotenv file (use dotenv.example file for reference)

4. yarn start 
- runs app in dev mode

=== Wireframes ===

https://wireframepro.mockflow.com/view/MOOxR3ApUmb

=== User Stories ===

(Coming Soon)

=== Craete React App ===

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
