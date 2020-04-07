# naya-studio-backend

The backend for onborading sample website for Naya Studio
The frontend for this can be found [here](https://github.com/aneeshsharma/naya-studio-signup/)

## How to start the server?

> For this to work, make sure you have MongoDB installed. Instructions for that can be found [here](https://docs.mongodb.com/manual/installation/)

First of all make sure you have `nodejs` and `npm` installed. To install these run-

1. On Debian/Ubuntu - `sudo apt install nodejs npm`

After this is complete, clone the given repository and then install all the dependencies

```
$ git clone https://github.com/aneeshsharma/naya-studio-backend.git
$ cd naya-studio-backend
$ npm install
$ npm test
```

Thats it! The last command should start the server on port `7800` and you are good to go.

Do make sure that you change the host address on the frontend so that it uses the newly created server.
