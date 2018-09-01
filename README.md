<p align="center"> 
  <img src='https://drive.google.com/uc?id=1albVAA6GrHQaG0EvN3a1WFCs9irSv5Lk' alt='Freebee logo' width="200" />
</p>
<p align="center"> 
  <a href="https://codeclimate.com/github/FreebeeTeam/freebee-web/maintainability">
   <img src="https://api.codeclimate.com/v1/badges/db6c5c49537d58e96455/maintainability" />
  </a>
  <a href="https://codeclimate.com/github/FreebeeTeam/freebee-web/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/db6c5c49537d58e96455/test_coverage" />
  </a>
 <a class="badge-align" href="https://www.codacy.com/app/ArtemDadychenko/freebee-web?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FreebeeTeam/freebee-web&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/1f4cddeec32a4024be30e636a7f17148"/></a>
</p>

# Freebee WEB

It's a web client to help people finding free facilities (simply put, *freebies*) on the map 🌍.

* [Small VK public page](https://vk.com/freebeeapp);
* [Freebee at Social Weekend Hackathon](http://telegra.ph/Social-Weekend-Hackathon--kak-ehto-bylo-02-26).

## Getting started

Clone project to your computer.

```
$ git clone https://github.com/FreebeeTeam/freebee-web.git
```

### Prerequisites

To start with Freebee WEB, you should have [Node](https://nodejs.org/en/download/package-manager/) installed.

### Code style

To save code style we are using eslint and config from airbnb.
You should configure your editor for highlighting style errors.

## Types

We are using flow to provide types in javascript.
You should configure your editor for highlighting type errors.

Install flow globally

```
$ yarn add global flow
```

Run this for install stubs for dependencies. (after running `yarn install`)

```
$ yarn flow-typed install
```

To run background type checking run

```
$ flow
```

To stop background type checking run

```
$ flow stop
```

To single time checking run

```
$ flow check
```

### Installing

Install all dependencies.

```
$ yarn install
```

### Start

To run server on localhost type  `yarn start` in root folder of project.

```
$ yarn start
```

## Deployment

Currently, deploy is not configured 😢

## Built With

- [Node.js](https://github.com/nodejs/node) - JavaScript runtime for server;
- [yarn](https://yarnpkg.com) - Package manager for JavaScript;
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces;
- [MaterialUI](https://material-ui.com/) - React components that implement Google's Material Design.

## Developed by

* **Артём Дадыченко** - [adadychenko](https://github.com/ArtemDadychenko) - Author, Frontend Development;
