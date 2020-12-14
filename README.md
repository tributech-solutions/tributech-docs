# Tributech DataSpace Kit Documentation

## ![Publish docs via GitHub Pages](https://github.com/tributech-solutions/tributech-DSK-docs/workflows/Publish%20docs%20via%20GitHub%20Pages/badge.svg?branch=master)

The Tributech DataSpace Kit documentation and covers the components DataSpace Hub, Node and Agent. This documentation is written in markdown syntax and hosted via mkdocs and mkdocs material theme on Github Pages.

## Local Development

---

For the local development follow the instuctions on:

- <https://www.mkdocs.org/#installation> to install mcdocs
- <https://github.com/squidfunk/mkdocs-material> to install the material theme

Run the application on localhost for development

```
cd <path-to-directory>/
mkdocs serve
```

#### Upgrading your local version of mkdocs-material

See https://squidfunk.github.io/mkdocs-material/upgrading/ --> Run

```
pip install --upgrade mkdocs-material
```

## Deployment via Docker

---

Clone repository and navigate into the project folder

```
cd <path-to-directory>/
```

Download, build and run the docker image:

```
docker run --rm -it -p 80:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

## Styling

Styling can be customized through CSS in the ./css/customization.css file.

## Deployment

Deployment is triggered automatically through a Github Action when a push to the master branch is registered.
