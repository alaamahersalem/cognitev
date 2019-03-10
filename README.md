![Cognitev](https://avatars0.githubusercontent.com/u/28094901?s=280&v=4)
# Programming Challenge
Cognitev programming challenge for frontend

# Creating ACL (Access Control List) module to give and check permissions.

In this Project There is an implementation for ACL concept, In this project the Admin or super Admin can create
another role , give the permission to each role and he can check if the permission is actually given or not .

In this project there is three main three UI screens to help the admin :

<div>1-create roles.</div>
2-create the permissions<div style="color:red"> without adding where condition in the screen but you can add it from the code itself</div>
3-check the permissions<div style="color:red"> without adding where condition in the screen but you can add it from the code itself</div>

This Project is intgrated with API by using JSON Server.
Each manipulation in setting or getting permissions is stored in json-server.
 

## Getting Started

These instructions to run the project 
- Open Project folder and  run the command 
```
npm install
```
```
npm run start
```
- Open the folder the navigate to /Data folder then the command 
```
  json-server --watch db.json --port 4000
```

## File Structure
 
```bash
├── src
│   ├── componants
│   │   ├── CheckPermission               #React componant to check the permission by filling form with data. 
│   │   ├── ControlDashBoard                #React componant to create Role by adding name.
│   │   ├── CreatePermission                #React componant to create Permission per role.
│   │   ├──CreateRole                       #React componant to create Role by adding name and then call API. method to add it 
│   │   ├── ErrorPage                       #handle error page
│   ├── acl
|   |   ├── addPermissios                   #handle adding permissions with API call.
|   |   ├── createRole                      #handle creating Roles with API call.
|   |   ├── getPermissions                  #handle getting permissions with API call.
|   |   ├── helpers                         #has some utities that are used in the ACL.
|   |   ├──index.js
│   ├── Services
|   |   ├── api.js                         #has all the Api Urls and the route URL as well.
|   |   ├── index.js                       #has the API calls 
│   ├── App.scss
|   ├── App.jsx
|   ├── index.jsx
│   ├── route
│   └── serciceworker.js
├── Data
|    ├── db.json                           #has the DataBase Object the is used by JSONServer.
├── node_modules
├── route
├── README.md
├── package.json
└── .gitignore
```


### How to use :

What things you need to install the project :
adding roles:
 ```
import acl from 'acl';
acl.createRole('admin')
```

adding permission:
```
import { a, an } from 'acl';
an('admin').can('get').from('/users')
a('user').can('post').to('/users/:userId/articles').when((params, user) => user.id === params.userId);
```

checking permission: <span  style="color:lightblue">you have to make this check in async function.</span>
<div style="color:red"> You have to pass when function in the end of your checking even it is an empty string.</div>
<div style="color:red"> You have to pass when the Id in the object as string .when({ id: "10" })</div>

```
import { check } from 'acl';
await check.if('guest').can('post').to('/users').when(); // false
await check.if('admin').can('post').to('/users').when(); // true 
await check.if('user').can('post').to('/users/10/articles').when({ id: "10" }); // true
```


### Prerequisites

What things you need to install the project :
- Be connected to the network because the "fontawsome package"is the Online one .
- Install json-server globally in your machine 

## Authors

* **Alaa Salem** - *Initial work* - [PurpleBooth](https://github.com/alaamahersalem)

