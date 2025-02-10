# Microfrontend multiple framework

This is a microfrontend with multiple framework project. I use a app shell which is built on Angular to load some microfrontend from many others framework like `React`, `Vue`(comming soon).

All projects from app shell and other micofrontend apps is using `webpack 5` to build and compile app. I use `WebpackModuleFederation` to make the microfrontend app in a the app shell and remote app.

Thanks to some package in `Angular` like `@angular-architects/module-federation`, `@angular-architects/module-federation-tools`, it make integrate other microfrontend easy.

## Main idea

We will export the components or the whole app from remote app to `Web Component` and expose it base on `Module Federation` of `Webpack`.

The host app will load async some remote app by using package like `@angular-architects/module-federation-tools`.

## Build and Run

Make sure you have run all other remote app.Then,
run `npm run start`

## Reference

[Multi-Framework and -Version Micro Frontends with Module Federation](https://www.angulararchitects.io/en/blog/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/)
