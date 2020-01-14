# What's for Lunch?

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

1. Clone this repository and run `npm install` in the root
2. Create a dotenv file in the root (`touch .env`)
3. Specify endpoints for recipes and ingredients, for example:
    ```
      REACT_APP_RECIPES_ENDPOINT=http://www.mocky.io/v2/5c85f7a1340000e50f89bd6c
      REACT_APP_INGREDIENTS_ENDPOINT=https://www.mocky.io/v2/5e1be98731000057004f344c
    ```
4. Use the scripts below to develop, test, and build

## Available Scripts

To get started,

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

## Docker

As a bonus, this project comes with a Dockerfile. To run the production app using Docker, build the image:

```bash
$ docker build \
  -f Dockerfile \
  -t lunch:prod .
```

then spin it up using (which will expose it at http://localhost:3010):

```bash
$ docker run -it -p 3010:80 \
  -e REACT_APP_RECIPES_ENDPOINT=http://www.mocky.io/v2/5c85f7a1340000e50f89bd6c \
  -e REACT_APP_INGREDIENTS_ENDPOINT=https://www.mocky.io/v2/5e1be98731000057004f344c \
  --rm lunch:prod
```

## Todos

- Dynamic, current-date-based test coverage (i.e., pass current date as argument)
- Display ingredient timestamps with recipe ingredients
- Not ugly design
