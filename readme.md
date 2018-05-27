# Webpack 3 ES6 React, Redux and Sass Boilerplate

Simple ES6 React, Redux and Sass boilerplate under Webpack 3. Based loosely on [Kliment Petrov boilerplate](https://github.com/KleoPetroff/react-webpack-boilerplate).

- [x] [React](https://facebook.github.io/react/) 16.x
- [x] [React Router](https://reacttraining.com/react-router/) 4.x
- [x] [Redux](http://redux.js.org/) 3.x
- [x] [Webpack](https://webpack.github.io/) 3.x with [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) 2.x
- [x] [Webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard) included if prefered
- [x] Sass support utilising [CSS modules](https://css-modules.github.io/webpack-demo/)
- [x] ECMAScript 6 support through [Babel](https://babeljs.io/)
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] Testing using [Jest](https://facebook.github.io/jest) and [Enzyme](https://github.com/airbnb/enzyme)
- [x] Development and production .env config
- [x] Production config with separate CSS generation with [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
- [x] Ready to deploy and alias to [now](https://github.com/zeit/now-cli) out the box

## Dev server

Ensure you have Node installed, then;

```shell
$ git clone https://github.com/thekeogh/webpack-react-redux .
```

Install node modules

```shell
$ npm install
```

Copy the `.env.example` for your `development` and `production` variables.

```Shell
$ cp .env.example .env
$ cp .env.example .env.production
```

Start the server

```shell
$ npm start
# or for Webpack Dashboard
$ npm run dev
```

Open your browser to `http://localhost:8111`. You can change the hostname and port within the `webpack.config.js` file.

[dotenv-safe](https://www.npmjs.com/package/dotenv-safe) is used for the `.env` variables, therefore all `.env` vars must be declared in the `.env.example` file for them to be usable in the app.

You are provided with two `.env` files, a `.env` which is used for your local development app (webpack dev server) and a `.env.production` which will be used when building your production ready assets via `npm run build` (see [below](#production-build)).

By default `.env.production` is in `.gitignore`, if this doesn't contain any sensitive information, you may want to commit it.

## Testing

A few simple tests have been included using [Jest](https://facebook.github.io/jest) and [Enzyme](https://github.com/airbnb/enzyme).

```Shell
$ npm test
```

## Production build

To build production ready assets, simply run:

```shell
$ npm run build
```

This will build a uglified `app-[hash].js` and a minified `app-[hash].css` and automatically create a `index.html` linking these files for you in a `build/` directory.

The `build/` directory is `.gitignore`'d by default, and purged before every build.

## Deployment

We can deploy to [now](https://github.com/zeit/now-cli) ([zeit](https://zeit.co/)) right out the box. Ensure you have the [now-cli](https://www.npmjs.com/package/now) installed globally with npm first.

Edit the `now.json` in the root, change this to the name of your app, then run:

```Shell
$ npm run deploy
```

This will build the production assets and deploy to now. 

To alias your deployment (e.g. `my-app.example.com` or `my-app.now.sh`) supply your `alias` in the `now.json` and run:

```shell
$ npm run alias
```

Your deployment should now be aliased.

If you want to deploy to now for production also, then you will likely have a slightly different config for production (i.e. a different `alias` pointing to your live domain). There is a supplied `now.production.json` config for this. To deploy/alias to production run:

```shell
$ npm run deploy-production
$ npm run alias-production
```

## Available commands

- `npm start` - start the dev server
- `npm run clean` - delete the `build` folder
- `npm run lint` - run a eslint check
- `npm test` - run all tests
- `npm run dev` - start the dev server using webpack dashboard
- `npm run build` - create a production ready build in the `build` folder
- `npm run deploy` - deploy the production build to [now](https://github.com/zeit/now-cli)
- `npm run alias` - alias the deployed build on [now](https://github.com/zeit/now-cli)
- `npm run deploy-production` - deploy the production build to a production ready [now](https://github.com/zeit/now-cli) instance
- `npm run alias-production` - alias the deployed build on a production ready [now](https://github.com/zeit/now-cli) instance


