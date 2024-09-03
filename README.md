
## Description

This backend provide service on job entity for basic CRUD, it is using webscoket for real time data update to the frontend interface for better user experience.


## Run this server in docker, please follow the steps below:
1. Have your docker desktop installed in your machine.
2. Clone this repository to your local machine.
3. Open your terminal and navigate to the root directory of this repository.
4. Run the following command to build the docker image:
```bash
docker-compose up --build
```
1. After the image is built, you can access the server at http://localhost:3000
2. To stop the server, you can run the following command:
```bash
docker-compose down
```
This docker compose file will create three containers, one for nestjs server,
one for postgres database and one for adminer to manage the database.
To view the database, you can access it http://localhost:8080
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
