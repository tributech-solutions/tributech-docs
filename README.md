# Tributech DataSpace Kit Documentation

## ![Publish docs via GitHub Pages](https://github.com/tributech-solutions/tributech-DSK-docs/workflows/Publish%20docs%20via%20GitHub%20Pages/badge.svg?branch=master)

The Tributech DataSpace Kit documentation and covers the components DataSpace Hub, Node and Agent.
This documentation is written in markdown syntax using [docusaurus](https://docusaurus.io/docs/) hosted on Github Pages.

## Why doesn't this repo use Git LFS?

Git LFS is not supported with Github Pages: https://github.com/git-lfs/git-lfs/issues/3498

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

## Deployment

The master branch get automatically deployed using Github-Actions.

## Versioning

### Updating a specific version

To update a specific version of the documentation just edit the files in the correct folder and merge to master using a PR.

### Releasing a new version

To release a new version you need to run `yarn run docusaurus docs:version [X.X.X]`.
