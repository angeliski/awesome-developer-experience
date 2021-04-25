[![Netlify Status](https://api.netlify.com/api/v1/badges/2558d4de-2b64-4702-8a25-07439610ee62/deploy-status)](https://app.netlify.com/sites/awesome-developer-experience/deploys)

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

You can find the production version at [http://awesome-exp.dev/](http://awesome-exp.dev/)

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

# Algolia Index

You can run in your local environment.
```sh
docker run -it --env-file=.env -e "CONFIG=$(cat ./search_configs/site.json | jq -r tostring)" algolia/docsearch-scraper
```

Or add a tag in the following format: `index.[SOMETHING]`. In any case, the index process run at midnight point to main branch.

## Deployment

The deployment is handle by [Netlify](https://app.netlify.com/sites/awesome-developer-experience/deploys), open your PR and just wait for the preview.