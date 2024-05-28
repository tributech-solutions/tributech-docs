# Tributech Platform Documentation

## ![Publish docs via GitHub Pages](https://github.com/tributech-solutions/tributech-DSK-docs/workflows/Publish%20docs%20via%20GitHub%20Pages/badge.svg?branch=master)

This repository contains the Tributech Platform documentation.
This documentation is written in markdown syntax using [docusaurus](https://docusaurus.io/docs/) hosted on Github Pages.

## Why doesn't this repo use Git LFS?

Git LFS is not supported with Github Pages: https://github.com/git-lfs/git-lfs/issues/3498

## Requirements 
Install NodeJS on [Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) or [WSL](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl), e.g. WSL:
```
## Install NodeJS on WSL

# install curl
$ sudo apt-get install curl

# install nvm
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash	

# restart console

# check if nvm is installed
$ nvm --version

# install Node.js max LTS version < v17 (because of the Webpack crypto.createHash() function)
$ nvm install 16.19.0
```

## Installation

```console
yarn
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
yarn clear
```

This command clears the local cache in case References / Images are not reflected in the `yarn start`

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
