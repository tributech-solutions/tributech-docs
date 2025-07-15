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

# install Node.js max LTS version < v18 (because of the Webpack crypto.createHash() function)
$ nvm install 23.0.0
```nvm install

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

By default, Docusaurus uses a `/docs` folder to store the "latest version" of the documentation, which appears in the version dropdown menu.
However, in this setup, only numbered versions should be visible in the dropdown, so the `/docs` folder has been deleted.

To release a new version with Docusaurus using the command `yarn run docusaurus docs:version [X.X.X]`, follow these steps:

1. Copy the latest version from versioned_docs into a newly created `/docs` folder at the root of the repository.
2. Run the versioning command mentioned above to create the new version.
3. After releasing the new version, you can delete the `/docs` folder again.
4. Make any necessary changes for the new release in the corresponding folder inside `/versioned_docs`.

## Add new Navbar items

Previously, the navbar was configured globally in `docusaurus.config.js`. Now, since different versions (e.g., v5.0.0 vs. earlier versions) require different navbar items, the navbar has been customized using a swizzled theme component.

- **Global navbar items** (shared across all versions) should still be added to `docusaurus.config.js` under `themeConfig.navbar.items`.
- **Version-specific or custom navbar items** should be added directly in the React component at `src/theme/Navbar/Content/index.js`.

To add a custom navbar item for a specific version:

1. Open `src/theme/Navbar/Content/index.js`.
2. Use the `activeVersion` variable to conditionally render your custom `<Link>` or navbar item for the desired version.
3. Example:
   ```jsx
   {activeVersion?.name === '5.0.0' && (
     <Link className="navbar__item navbar__link" to="/tributech_c_sdk/overview">
       Tributech C-SDK
     </Link>
   )}
   ```
4. For items that should appear in multiple versions, adjust the condition accordingly.

**Note:**
Global items remain in the config; version-specific items are handled in the **swizzled** component.

