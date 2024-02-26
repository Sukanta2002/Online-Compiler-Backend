# Online Compiler Backend

An Online Compiler Backend, which is built using Node.js and Docker to enhance security by isolating and executing untrusted code within a Docker container.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Security](#security)

## Overview

This Online Compiler Backend allows users to submit and execute code snippets in various programming languages through a secure and isolated environment. The backend utilizes Node.js for the server-side logic and Docker for containerization, ensuring that untrusted code runs in a controlled and separated environment.

### Supported languages

| Languages  |
| ---------- |
| python     |
| Javascript |
| Java       |
| c/cpp      |

## Prerequisites

Before running the Online Compiler Backend, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Docker: [Download and install Docker](https://www.docker.com/get-started)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sukanta2002/Online-Compiler-Backend.git
   cd online-compiler-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Make a `.env` File

```
DOCKER_FILE_PATH="PATH-TO-DOCKERFILE"
```

> Replace the "PATH-TO-DOCKERFILE" with your path.
> The `Dockerfile` is present in `/public/docker/`

2. Give execution permission to the `build.sh` file

```bash
chmod +x /public/docker/c/build.sh
chmod +x /public/docker/cpp/build.sh
chmod +x /public/docker/java/build.sh
chmod +x /public/docker/javascript/build.sh
chmod +x /public/docker/python/build.sh
```

3. Start the server:

   ```bash
   npm start
   ```

4. Access the Online Compiler API at `http://localhost:3000/api/code`.

5. Submit code snippets for compilation.

```json
{
  "lang": "python",
  "code": "print('Hello')"
}
```

5. Retrieve the results.

```json
{
  "statusCode": 200,
  "output": "Hello",
  "message": "Success",
  "success": true
}
```

## Security

The Online Compiler Backend prioritizes security by executing untrusted code within a Docker container. The containerization ensures that the execution environment is isolated, minimizing potential risks associated with executing arbitrary code.

Please review and configure the Docker container settings to further enhance security based on your specific requirements.
