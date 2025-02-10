# Microfrontend multiple framework

This is a microfrontend with multiple framework project. I use a app shell which is built on Angular to load some microfrontend from many others framework like `React`, `Vue`(comming soon).

All projects from app shell and other micofrontend apps is using `webpack 5` to build and compile app. I use `WebpackModuleFederation` to make the microfrontend app in a the app shell and remote app.

Thanks to some package in `Angular` like `@angular-architects/module-federation`, `@angular-architects/module-federation-tools`, it make integrate other microfrontend easy.

## Build and Run

Make sure you have run all other remote app.Then,
run `npm run start`
