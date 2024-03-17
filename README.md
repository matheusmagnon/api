# Getting started with Jamango

1. **Clone the Repository**: Start by cloning the project repository to your local machine:

    ```bash
    git clone https://github.com/matheusmagnon/api.git
    cd api
    ```

2. **Configure Environment Variables**:

    ```bash
    cp example.env .env
    ```
    Add yours values of environment


# Building WITH Docker (the easy way)
This section will guide you through setting up and running our project using Docker Compose. Please follow the instructions below to get started.

## Pre-requisites
The following technologies must be installed in your local machine:
- [Docker Desktop](https://docs.docker.com/get-docker/): Our project uses Docker containers for application components. Please install Docker by following the instructions for your operating system.
- [Docker Compose](https://docs.docker.com/compose/install/) - This is used to define and run our multi-container application and needs to be installed in addition to Docker.

If you already have ran the build instructions below, you will need to rebuild the containers for the changes to take effect:

```bash
docker compose down # shut down container
docker compose build # rebuild container
docker compose up -d # start container
```

You can now access the database using your favorite database client at `localhost:3306` (or whatever port you changed it to).

## Build Instructions

**Build Docker Images**: Run the following command to build Docker images based on the project's Dockerfile(s):

`docker compose build`

## Running Instructions

1. **Start Containers**: To start the project, run the following command:

    `docker-compose up -d`

   This will start the project containers in detached mode, and they will run in the background.

2. **Access the Application**: Once the containers are up and running, you can access the application in your web browser at `http://localhost:3000

3. **Shut Down**: To stop and remove the containers when you're done, run the following command:

    `docker-compose down`

## Basic Docker Commands
### Building & Running
- `docker compose up -d`: start docker container from latest image (-d for detached/separate terminal)
- `docker compose up --build`: start docker container with fresh build
- `docker compose down`: shut down docker container
- `docker-compose down && docker-compose up --build -d`: shut down docker containers & build new container in detached mode
- `docker compose build [service_name]`: build specific Docker service
### Memory
- `docker builder prune`: Remove build cache
- `docker image prune -a`: remove image cache
- `docker system prune`: clean out any images, builds, etc., that might be hanging
- `docker system df`: display disk space used by docker
### Debugging
- `docker ps`: List running containers.
- `docker-compose logs`: View container logs.
- `docker exec -it <container_name> bash`: Access the shell of a running container for debugging or running commands.


<!-- 
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->