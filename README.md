# Teamtailor Technical Task

The app is based on NestJS, which integrates with Teamtailor API and allows you to fetch and process data. The project has full Docker configuration and CI/CD using GitHub Actions.

## Requirements

- [Node.js](https://nodejs.org/) >= 20.18.0 (LTS)
- [Docker](https://www.docker.com/) >= 27.2.0 (optional for containerized run)
- [Docker Compose](https://docs.docker.com/compose/) >= 2.29.2-desktop.2 (optional for containerized run)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bartosz-szymanski-dev/teamtailor-technical-task.git
   cd teamtailor-technical-task
   ```

2. Install dependencies:

   ```bash
    npm install
    ```
   
3. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   TEAMTAILOR_API_URL=https://api.teamtailor.com/v1
   TEAMTAILOR_API_VERSION=20240404
   TEAMTAILOR_API_KEY=your-api-key
   ```
    Replace `your-api-key` with your Teamtailor API key.

4. Run the app:

   ```bash
   npm run start
   ```
   
    The app will be available at `http://localhost:3000`.

## Usage

The app has three endpoints:

1. `/candidate/list` - method: `GET` - fetches list of candidates with their job-applications.
2. `/csv/create` - method: `POST` -  creates a CSV file based on the input back from `/candidate/list`.
3. `/csv/download` - method: `GET` - downloads the CSV file created by `/csv/create`.

## Testing

To run tests, use the following command:

```bash
npm run test
```

### E2E Testing

To run E2E tests, use the following command:

```bash

npm run test:e2e
```

## Docker

To run the app in a Docker container, use the following commands:

1. Build the Docker image:

   ```bash
   docker build -t teamtailor-technical-task .
   ```
   
2. Run the Docker container:

   ```bash
    docker run -p 3000:3000 -d teamtailor-technical-task
    ```
   
    The app will be available at `http://localhost:3000`.

## CI/CD

The project has CI/CD using GitHub Actions. The workflow is triggered on every push to the `main` branch. The workflow consists of the following steps:

1. Install Node.js
2. Install dependencies
3. Run tests