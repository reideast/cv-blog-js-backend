# log

# React front end & Express back end
- First, back-to-basics idea
- See: https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

## Create app structure

### React frontend
- [Facebook's create-react-app](https://github.com/facebook/create-react-app)
    - Installs: react, react-dom, and react-scripts with cra-template...
    ``` bash
    npx create-react-app client
    cd client
    npm start
    ```
- Results:
    ```
    Success! Created client at C:\Users\deskase\Dropbox\Code\JavaScript\cv-blog-js\client
    Inside that directory, you can run several commands:
      npm start
        Starts the development server.
      npm run build
        Bundles the app into static files for production.
      npm test
        Starts the test runner.
      npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can't go back!
    We suggest that you begin by typing:
      cd client
      npm start
    Happy hacking!
    ```

### Express backend
- [Express Application Generator](https://expressjs.com/en/starter/generator.html)
    ``` bash
    npx express-generator api
    cd api
    npm install
    npm start
    ```
- Results:
    ```
    install dependencies:
    npm install
    run the app:
    SET DEBUG=api:* & npm start
    ```
- TODO: needs an `npm audit fix`
- TODO: warnings:
    ```
    npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
    npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
    npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
    ```

### git
- Committed this basic framework to git: https://github.com/reideast/cv-blog-js

## Host on Heroku
- Create a heroku "app", `cv-blog-js`
- https://cv-blog-js.herokuapp.com/
- Connect to GitHub, authorise on this repo
- Enable auto-deploy for all commits to master