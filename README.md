# How to run

```
yarn
yarn start
```

# How to test

```
yarn test
```

# Shortcuts due to time concerns

1. Layout and design was taken from https://github.com/trending, I've just split it into meaningful components. No single CSS was written by me. CSS files are loaded in `/public/index.html`. If I would need to build the design myself I would use `styled-compoonents` and some ui kit, i.e `material-ui`.
2. Inside of `/components/DropdownMenu.tsx` dropdown window open state was originally mananged by CSS and behavior of `detail` element. I didn't want to change it and to move to react state, that's why `useRef` is used there.
3. Only `TredingPage.tsx` is covered with unit tests but this should already give an idea.
4. It might have sense to make out of `Card` a memo component for the performance reason, but then I would need to memoise all incoming callback props with ` useCallback`.
