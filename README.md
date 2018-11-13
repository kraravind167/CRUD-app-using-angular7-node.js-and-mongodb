# Angular7CRUD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

# Install required dependencies.
   1. Install basic Dependencies like bootstrap,materials,primefaces etc. of your Choice.
   
   2. Install Angular Routing Progress Indicator (Optional)
      `npm install ng2-slim-loading-bar --save`
      
   3. Install Search module(optional)
      `npm i ng2-search-filter --save`
      
# Directories 
 1.*api* folder contains backend data's.
 
 2.Other files apart from *api* folder contains Frontend part.
 
# Terminals
1.Genereate new project in angilar cli , Start server by inititing `ng serve`.

2.Open new terminal , Change directory to *api* , Run `nodemon server.js`
   If *Nodemon* is not installed , Run cmd inside *api* as `npm i nodemon --save`.
   
3.Open another terminal , Run `mongod` to open the mongodb server

  Note:Right now, you have three servers are running.
  
       Angular Development Server
       Nodemon server
       MongoDB server
Remember all the three servers are running fine without any error otherwise, our application will not work.
