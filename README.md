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
docker build -t trueml-backend-nestjs 

docker-compose up --build

docker run -d -p 3000:3000 --name trueml-backend-nestjs-container trueml-backend-nestjs
```

In this command:

-d flag is for running the container in detached mode, which means it runs in the background.
-p 3000:3000 flag maps port 3000 on your machine to port 3000 on the container, which is the port your NestJS application is configured to listen on.
--name trueml-backend-nestjs-container gives your container a name for easier reference.

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

## Deploy to GCP

 ### Google Cloud SDK and Kubernetes CLI:
 Install the Google Cloud SDK and Kubernetes CLI (kubectl).
 
 ### Enable Google Kubernetes Engine API:
 Enable the Kubernetes Engine API for the project.

 ### Push Docker Image to Google Container Registry (GCR):

```plaintext
# Configure Docker to use gcloud as a credential helper
gcloud auth configure-docker

# Tag the Docker image
docker tag trueml-backend-nestjs gcr.io/your-project-id/trueml-backend-nestjs:v1

# Push the Docker image to Google Container Registry
docker push gcr.io/your-project-id/trueml-backend-nestjs:v1
```

### Create a Kubernetes Cluster:
```plaintext
# Create a GKE cluster
gcloud container clusters create trueml-backend-cluster --zone your-zone
```
### Deploy to GCP:
```plaintext
# Apply the deployment configuration
kubectl apply -f deployment.yaml
```

### Expose the Application:
```plaintext
# Expose the application to the internet
kubectl expose deployment trueml-backend-deployment --type=LoadBalancer --port 80 --target-port 3000
```
