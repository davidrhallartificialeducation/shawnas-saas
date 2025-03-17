# Getting Started

## Software

### Install and Create an Account

* [Cursor](https://www.cursor.com)
* [Docker](https://www.docker.com)
* [Postman](https://www.postman.com)

### Install Only

* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/download)

## Local Setup

Open PowerShell and run the following commands:

Make a new directory

```
mkdir ~/Documents/myProjects
```

Switch to the new directory

```
cd ~/Documents/MyProjects
```

Copy the code to your computer
```
git clone https://github.com/davidrhallartificialeducation/shawnas-saas.git
```

Change to the project root
```
cd shawnas-saas
```

run the project
```
docker compose up --build
```

## Testing

1. Open Postman
2. Create two new GET HTTP Request
3. Set the url in the first request to localhost:3000/health (Simulated Humana API)
4. Set the url in the second request to localhost:3001/health (Simulated Genesys API)
5. Send a GET request and ensure they return a 200




