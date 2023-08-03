<h1 align="center">Welcome to developer-portfolio 👋</h1>
<a href="https://github.com/1hanzla100/developer-portfolio/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/1hanzla100/developer-portfolio"></a><a href="https://github.com/1hanzla100/developer-portfolio/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/1hanzla100/developer-portfolio"></a><a href="https://github.com/1hanzla100/developer-portfolio/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/1hanzla100/developer-portfolio"></a> <a href="https://github.com/1hanzla100/developer-portfolio/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/1hanzla100/developer-portfolio"></a>

## Software Developer Portfolio Template built with Next.js, bootstrap.


## To view a live example, **[click here](https://sajib-4414.github.io/developer-portfolio/)**.

To Edit information, `portfolio.js` to get your personal portfolio.

## Sections

✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Feedbacks\
✔️ Projects\
✔️ Github Profile

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
<br>
**For Windows** Install Visual C++ Build Environment: [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## To Run development server
`there is an issue right now with paths, because of this development server does not run, but production on github runs`
For now just run the build as production with `npm run test` and see the output from the `out` folder, it should run fine, do this until I fix.

1. Fork this repoistory and clone it to your local machine.

```bash
$ git clone https://github.com/<your-username>/developer-portfolio.git
```

2. Go into the repository

```bash
$ cd developer-portfolio
```

3. Install dependencies

```bash
$ yarn
```

4. Edit `portfolio.js` to edit information

5. Start's development server

```bash
$ yarn dev
```
## To have this on your github page running with production build
This guide will show the project at `https://<username>.github.io/<somepathname>` url.
1. once everything cloned and dependencies installed, run npm run deploy, what it does is, this project has a plugin gh-pages, it builds a production build,
2. then pushes the production build in the branch(gh-pages), if the branch not there, it creates. Now github can uses the production build from gh-pages branch to show as your page. Now we need to say to github that take the production build from the gh-pages branch and show it.
3. **Important** a Fix for jekyll themed pages, goto github your project page, visit the gh-pages branch, add a file called .nojekyll without any content, it forces the github to take static assets, otherwise your site will be of no css.
4. open the settings page of your github repo
5. Then goto codes and automation-> pages, select a path to visit your portfolio site(not rootpath), path should be like `https://<username>.github.io/<somepathname>`
6. Now choose source, deploy from branch, branch name `gh-pages` , branch path root. select deploy.
7. it will show up on the path now `https://<username>.github.io/<somepathname>` in 2-5 minutes

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [reactstrap](https://reactstrap.github.io/)
- [react-reveal](https://www.react-reveal.com/)
- [react-lottie](https://www.npmjs.com/package/react-lottie)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Illustrations

- [Lottie File Source](https://lottiefiles.com)

## Icons

Iconify Icons are used in skill section. You can find all the icons here: [Iconify](https://icon-sets.iconify.design/).

