## Simple react article app
App fetches data from hardcoded URI, and shows it in material-ui card.
Tested with jest and enzyme. Redux for store. Typescript where I would really like to use types.

### How it works
At application init, request is performed.

If data is available, it is put into store and then rendered.
Depends on screen used to view the site, different image will be loaded.

If data is incomplete, server did not respond or respond with error, error message will be put into store and error page will appear instead.

#### Most important packages:
- react
- redux
- typescript
- lodash
- material-ui
- jest
- enzyme

#### Additional tools
tslint, prettier and husky are used for pre-commit code beautification and standarization.
react-loader-spinner used as a page loader.