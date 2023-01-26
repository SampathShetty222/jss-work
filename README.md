# Next Boilerplate

A boilerplate for creating new projects with Next.js, JavaScript, Tailwind CSS, ESLint, Prettier, Husky & lint-staged. Bootstrapped with create-next-app.

## Getting Started

To get started, clone the repository and install the dependencies:

```
git clone https://github.com/zysk/next-boilerplate.git
cd next-boilerplate
npm install
```

## Post installation

- Change your repository's git origin to the project's git repo using the command below

  ```
  git remote set-url origin https://github.com/zysk/repo-url.git
  ```

  For ex: If you are working on a website called gojek and its git repository URL is https://github.com/zysk/gojek.git, then

  ```
  git remote set-url origin https://github.com/zysk/gojek.git
  ```

- Rename your folder to the name of the project you are working on
- Update constants in site-config.js

Then, you can start the development server with:

```
npm run dev
```

This will open the website in on http://localhost:3000

## Folder structure

```
.husky
components
├── common
│   ├── data
│   │    └──menu.js
│   ├── styles
│   │    └── footer.module.css
│   │    └──header.module.css
│   ├── header.js
│   └── footer.js
├── home
│   ├── styles
│   │    └──card.css
│   ├── card.js
│   └── data.js
pages
├── _app.js
├── _document.js
└── index.js
styles
├── globals.css
├── index.module.css
└── about.module.css
.env.local
.eslintrc.json
.gitignore
.prettierrc
site-config.js
tailwind.config.js
```

### Components

All the reusable components in the projects resides in this folder. If a component is reused across the project, for ex, a header, then it should be placed inside common folder or else if it is being reused within a page, for ex, a card can be reused in all blog pages, then create a folder called **blog** inside components folder and add card components inside that. The components folder heirarchy should follow the same heirarchy as of pages folder.

**Example**: If there is a folder called blog inside pages folder, then create a same folder inside components and all the reusable components there. The folder structure for each component should also follow the same folder structure as of home folder of this repo

### Components/styles

All the component related styles should be placed inside this repo. Common component related styles goes inside **common/styles** folder and page related component styles goes inside **page-name/styles** folder

### data.js

This folder contains any static data for the component.
Ex: header, footer menu, social media links etc.

All the components folder which is created for a page should consists of a styles folder which a single styles.module.css for each component, component JS file and a data.js file

## pages

This folder contains all the pages in the application

## styles

This folder consists all the CSS files for the pages. For each page created, we should have an css file inside **styles** folder.

To summarize, all the page related styles goes inside **styles/pages-name.module.css\* files, component related styles goes inside **components/page-name/styles/component-name.module.css\*\* file.

## site-config.js

This file consists of constants for storing site's meta title, meta description etc.

## .env

In this file, we'll store any secret and base URLs used int he application
