# TrueML Backend NestJS

This repository contains a NestJS implementation to interact with the [TrueAccord Recover API](https://docs.trueaccord.com/recover/recover-api-reference/), focusing on the `customers` endpoint.

## Project Structure

The project follows a Domain-Driven Design (DDD) approach, organizing code based on business domains. The directory structure is organized as follows:

```plaintext
src/
|-- customers/
|   |-- dto/
|   |-- interfaces/
|   |-- services/
|   |-- controllers/
|   |-- customers.module.ts
|-- app.module.ts
|-- main.ts

```

## Getting Started

### Prerequisites
* Node.js v14.x

* Docker

## Installation
Clone the repository:

```plaintext
git clone https://github.com/your-username/trueml-backend-nestjs.git
cd trueml-backend-nestjs
```

Install dependencies:
```plaintext
npm install
```

## Running the Application

To run the application locally:
```plaintext
npm run start
```

To run the application inside a Docker container:
```plaintext
docker-compose up --build
```

## API Usage
The application exposes the following endpoints for interacting with the customers data:

* GET /customers: Retrieve a list of all customers.
* POST /customers: Create a new customer.
* PUT /customers/:id: Update an existing customer.

## Testing

Run tests using the following command:
```plaintext
npm run test
```

## Deployment

The application is containerized using Docker, making it easy to deploy in any environment that supports Docker containers.

