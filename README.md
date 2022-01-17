# #100DaysOfCode && JavaScript

## Day 1

[Lodash: debounce](snippets/001-debounce.html)

Run snippet:

```
cd snippets
npm i
open 001-debounce.html
```

## Day 2

Create my first Angular project (using the Angular CLI):

```
npm install -g @angular/cli
ng new my-first-project --skip-tests
cd my-first-project
ng serve --open
```

## Day 3

Create two components Angular component:

```
ng generate component table-of-content
ng generate component form-sample
```

And setting up the Angular router to switch between the two.

## Day 4

Deploy my Angular project to Firebase hosting:

```
cd my-first-project
ng build
firebase use --add
firebase deploy
```

It is important to notice the rewrites rule in the [firebase.json](./my-first-project/firebase.json) file