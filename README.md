# "Grow CF Capacity" Website

:point_right: Live website at https://grow.convergentfacilitation.org

Website status: [![Netlify Status](https://api.netlify.com/api/v1/badges/58a260b6-451e-425f-a42f-a08951756413/deploy-status)](https://app.netlify.com/sites/co-create-convergentfacilitation/deploys)

Sibling website "CF in the World" is live at https://convergentfacilitation.org ([Convergentfacilitation.org Github Repository](https://github.com/Convergent-Facilitation/convergentfacilitation.org).

## Making/suggesting edits/additions here on Github

If you want to suggest new content (e.g. your own offering) please sign up to github and then send your account email or username to tech@convergentfacilitation.org so that we can add you as contributor to this repository.

Markdown files (text files using the markdown syntax with the suffix `.md` or `.mdx`) can be edited using markdown ([Basic Markdown Syntax](https://www.markdownguide.org/basic-syntax/) or HTML ([Basic syntax: HTML cheatsheet](https://developer.mozilla.org/en-US/docs/Learn/HTML/Cheatsheet); [Comprehensive Intro to HTML](https://www.w3schools.com/html/html_intro.asp)). 


### Coaching Calls / Courses / Materials Libraries 

The libraries on the website are automatically being generated from markdown files.

- Each [Coaching Call Card](https://grow.convergentfacilitation.org/coaching-calls) is being generated from the markdown text files in [resources/recordings-coaching-calls](https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main/resources/recordings-coaching-calls) 
- Each [Course/Workshop Card](https://grow.convergentfacilitation.org/courses) is being generated from the markdown text files in [resources/recordings-courses-workshops](https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main/resources/recordings-courses-workshops)
- Each [Material Card](https://grow.convergentfacilitation.org/materials) is being generated from the markdown text files in [resources/materials](https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main/resources/materials)

#### Images for Cards 

Both specific and generic images are kept in associated folders under [static/img](https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main/static/img). For the coaching calls a [generic card image](https://raw.githubusercontent.com/Convergent-Facilitation/cf-website-learning-community/main/static/img/coachingCalls/generic-cf-coaching-call.webp) will be used if there is no image that matches the name of the provider(s). 


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn prebuild
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To test the build locally run

```
yarn serve
```

