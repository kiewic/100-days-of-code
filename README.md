# #100DaysOfCode && JavaScript

## Development

```
npm install -g @angular/cli
ng new my-first-project --skip-tests

cd my-first-project
ng serve --open
```

Creating new components:

```
ng generate component table-of-content
ng generate component form-sample
```

And setting up the Angular router to switch between the two.

## Firebase Hosting

Deploy my Angular project to Firebase hosting:

```
cd my-first-project
ng build
firebase use --add
firebase deploy
```

It is important to notice the rewrites rule in the [firebase.json](./my-first-project/firebase.json) file

## Day 6

* The `HostListener` decorator listens for a DOM event and calls a handler method

## Firebase Troubleshooting

```
firebase logout
firebase login
firebase use <project id>
ng build
firebase deploy
```
