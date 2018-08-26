# Node_JS_API_Demo
this is an individual project.

## Set Up
instaled package: <br>
in this project, i use React JS as views engine <br>
sql for database <br>
and jsx for forent view <br>

### use following command to instal package inorder to run node.js
npm install <br>
npm install express-react-views react react-dom <br>

## Restful API
simple AIP is applied in to this project. <br>
the process circle as following: <br>
User Request -> server -> router -> function-> database -> server -> views -> User <br>

## Set UP Database connection
use pool function to connect the SQL databse. <br>
added limit connection time for connecting process :
connectionTimeoutMillis: 1000

## Fuzzy Search
impelement fuzzy search from database.
this fuzzy algo is for spell mistake and association with exsist table.
## home page: 
<img width="1436" alt="screen shot 2018-08-26 at 5 12 41 pm" src="https://user-images.githubusercontent.com/15969187/44633060-d8d4bb00-a953-11e8-89df-3df858a1bcad.png"> <br>
## A sample of search
<img width="1437" alt="screen shot 2018-08-26 at 5 13 03 pm" src="https://user-images.githubusercontent.com/15969187/44633061-d8d4bb00-a953-11e8-8691-8a4967f89762.png"> <br>
## A sample of fuzzy search
<img width="1432" alt="screen shot 2018-08-26 at 5 13 34 pm" src="https://user-images.githubusercontent.com/15969187/44633062-d96d5180-a953-11e8-9dff-1daa8e459ba3.png"> <br>
## A sample of no match result
<img width="1438" alt="screen shot 2018-08-26 at 5 14 05 pm" src="https://user-images.githubusercontent.com/15969187/44633063-d96d5180-a953-11e8-85ee-5290155dd7f7.png">
