# ha-users

HA-Users User Service

## Quick Start

Get started developing...

First of all create a `.env` file. You should use the `.env.sample` as a template:

```shell
cp .env.sample .env
```

Fill in all the empty values with whatever suits you best. After you're done you can run the following sequence of commands:


```shell
# install deps
npm install

# start PostgreSQL
npm run dev:db

# run in development mode
npm run dev

# run tests
npm run test
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/users` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/users
  ```


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file