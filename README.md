# Warning
This project is depreciated and has potential security vulnerabilities. Updates would be required to re-launch this application in a production environment.

# Whiteboard++

# Overview

Whiteboard++ is a collaborative online whiteboard where you and your collaborators can draw and create images to convey complex ideas or plan out projects and ideas. The application will be used by users similar to MS Paint and other raster graphics editors but also allow for real-time editing with other users akin to GoogleDocs. The primary users of the application are professional teams at companies or groups of students working on group projects. 

# Team Members

Blake Geraci<br/>
Daniil Maly<br/>
John Pare <br/>
Matthew Plumador

# Application Initialization

To use this application you should have `node` and `npm` installed and issue the following commands:

1. `npm install`: this will install the required `node` libraries.
2. `node scripts/init_mongo.js`: this will initialize a local mongo-database
3. `npm run server`: this will start the local database server
4. `npm start`: This will run `webpack-dev-server`, allowing you to view the running application in the browser window at `localhost:8080` or the first available port after that.
