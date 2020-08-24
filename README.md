# Tributech DataSpace Kit Documentation

---
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

## Deployment via Docker

---

Clone repository and navigate into the project folder

```
cd <path-to-directory>/
```

Download, build and run the docker image:

```
docker run --rm -it -d -p 80:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```
