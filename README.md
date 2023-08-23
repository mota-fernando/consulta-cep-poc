# Consulta CEP

"Consulta CEP" is a project that allows users to easily retrieve address information by querying Brazilian ZIP codes (CEP). It utilizes APIs, such as Axios, Express, RabbitMQ, and Redis, to efficiently fetch and store data.

## Stable Branch

https://github.com/mota-fernando/consulta-cep-poc/tree/api/consulta-cep-poc

## Technologies Used

- Redis
- RabbitMQ
- TypeScript
- ViaCEP API
- ORM (e.g., TypeORM)
- React (with interface)

## Description

Consulta Cep is a TypeScript project that provides a convenient way to query address information using the ViaCEP API. It utilizes Redis for caching, RabbitMQ for message queuing, and an ORM (such as TypeORM) for database operations. The project also includes a React interface for easy interaction with the API. This README provides instructions on setting up and using the project, as well as details on how to contribute. The project is licensed under the Apache License.

## Project Structure

The project follows the following directory structure:


├── src
│   ├── controllers
│   ├── routers
│   ├── repositories
│   ├── services
│   ├── models
│   └── interfaces
├── database
│   ├── entitites
│   └── repository
├── dist
├── helpers
├── public
├── services
└── tests

## Setup

Instructions for setting up the project, including dependency installation, database configuration, etc.

To set up the project, please follow these steps:

1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Compile the project by running `tsc -w`

## Usage

### API first

1. Command: `npm start`<br />
    Description: This command starts the application.

2. Command: Write this URI address in your browser: `http://localhost:3000/api/cep/47430000` <br />
    Description: This command accesses the API endpoint to retrieve information for the specified CEP (postal code) "47430000".

## License

This project is licensed under the Apache License. See the [LICENSE](LICENSE) file for details.

## Contact

Contact information for obtaining support or asking questions related to the project.