## Blog Post

This repository accompanies [this blog post](https://zachgoll.github.io/blog/2019/choosing-authentication-strategy/) that explains all the code in it.

## Setup

The Express application requires a `.env` file and a public/private keypair.  In the root of the project, create a `.env` file and put the following into it:

```
NODE_ENV=development
DB_STRING=<your db string>
DB_STRING_PROD=<your db string>
```

Next, you will need to generate a public/private keypair.  The `.gitignore` automatically ignores the private key.

```
node generateKeypair.js
```

Note that to run the script, you will need a NodeJS version greater than v10.x.

## Quickstart

This app is a skeleton application and is not ready for production.  To start the app, you will need to run both an Express server and the Angular server.

```
# Start the Express server (http://localhost:3000)
node app.js

# Start the angular server (http://localhost:4200)
cd angular/
ng serve
```