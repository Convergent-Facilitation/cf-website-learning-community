# Usage of admonitions:
- :::note HOW TO USE THIS WEBSITE (white): for help how to navigate the page
- :::info SHARE ON HYLO (blue): request/invitation to share on hylo
- :::tip LEARN CONVERGENT FACILITATION (green): offering some learning about CF (principles/process)
- :::caution PAGE INCOMPLETE — HELP COMPLETE IT (orange): request to contribute to incomplete page
- :::danger/warning (red)

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
