# express-typescript

Implemenation of [learn-how-to-use-typescript-with-node-js-and-express-js](https://www.becomebetterprogrammer.com/learn-how-to-use-typescript-with-node-js-and-express-js/) articles series.


## Endpoints:
- GET /api/token
- GET /api/teams/
- POST /api/teams
- - Body example: 
    {
      "name": "test",
      "league": "test league"
    }
- GET /api/teams/{id}
- PATCH /api/teams/{id}
- DELETE /api/teams/{id}

## Genrate RSA key pair which will be used for tha API auth

[Generate RSA Key Pair](https://www.becomebetterprogrammer.com/jwt-authentication-middleware-nodejs-typescript/#Generate_RSA_Key_Pair)

## Running the api using docker-compose
- Create .env file, you can find the variables names in /.env.example file
- From the project root directory run `docker-compose up`
- The api now is running on http://localhost:3000
- Follow the steps here [scripts](https://github.com/osama-ahmed/express-typescript/blob/master/scripts/README.md) to create the database schema

## Runing the api locally
- Create .env file, you can find the variables names in /.env.example file
- From the project root directory run `docker-compose up mysql` to start a mysql instance
- Follow the steps here [scripts](https://github.com/osama-ahmed/express-typescript/blob/master/scripts/README.md) to create the database schema
- Run `npm install` to install the project dependencies
- Run `npm run start:watch`
- The api now is running on http://localhost:3000
