# Entertainment web app

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Lessons learned](#lessons-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshots

![home screen](./src/assets/screenshots/home.png?raw=true)
![example search results](./src/assets/screenshots/results.png?raw=true)
![movie info](./src/assets/screenshots/focused.png?raw=true)
![bookmarks page](./src/assets/screenshots/bookmarks.png?raw=true)

### Links
- [Live Demo](https://entertainment-app-4ce2a.web.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/en/main) - React routing library

### Lessons learned

This project presented many challenges and even more learning opportunities. Below are some notes on key lesson I learned that hopefully save someone the struggle of learning them the hard way.

 Data Validation

 The Problem
 * I was attempting to access a `release_date` property that didn't exist on some media objects returned by TMDB. As a result, searching for certain movies would cause a black screen along with Error: Cannot read property 'slice' of undefined
 
Solution

 * Use short circuit evaluation to only render a property if it exists. In my case: 
 ```js
 { movie.release_date && <p>{movie.release_date.slice(0,4)}</p> }
 ```
 * The right side of the `&&` operator will only render if the left side is truthy. This prevents acessing properties that don't exist

 Alternatives

 * According to [this article](https://medium.com/geekculture/stop-using-for-conditional-rendering-in-react-a0f7b96200f8), you could use a ternary operator to accomplish the same thing
 ```js
 { movie.release_date ? <p>{movie.release_date.slice(0,4)}</p> ? null } 
 ```

 React Re-Rendering

 The Problem

 * Clicking on a movie bookmark button was not filling in the bookmark icon. The movie was being added to a stateful `favorites` array but no re-render occured
 * [This article](https://blog.logrocket.com/how-when-to-force-react-component-re-render/) helped me realize the problem. I was attempting to set the state of `favorites` using the same object reference. This prevented React from perceiving any changes in the state and thus didn't cause a re-render
 ```js
 //no re-render
 const [favorites, setFavorites] = useState([])

favorites.push(movie)
setFavorites(favorites)
 ```

 Solution

 * In order for React to detect a change, set state using a new array

 ```js
 //re-render
 setFavorites([
    ...favorites,
    movie
    ])
 ```

Object Comparison + localStorage

Problem

* In order to determine whether to add or remove a movie from `favorites`, when a movie bookmark was clicked I used the following code to check if the movie was already in `favorites`
```js
const inFavs = favorites.some(fav => fav === movie)
```
* The code worked as I intended... as long as the user didn't refresh the page. After refreshing if a user clicked on
a bookmarked movie, `inFavs`  evaluated to `false` and the movie was added to `favorites` again.

Solution

* After some Googling I found  two articles on [values and references](https://dmitripavlutin.com/value-vs-reference-javascript/)
and [comparing objects](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/)
* The code above only evaluates to `true` if the two values reference the same object instance. This was was the case before refreshing, since all movie object instances came from TMDB. After refreshing, `favorites` is retrieved from `localStorage` and any movie objects in `favorites` now have a different refrence than those fetched from TMDB. As a result, using `inFavs` to compare two value identical movies, one from TMDB and the other from `localStorage`, evaluates to `false`
* To avoid this reference comparison I manually compared the `id` property of both movies
```js
const inFavs = favorites.some(fav => fav.id === movie.id)
```

Not included in this list are the challenges faced and lessons learned from using React Router, implementing CSS Grid, using React Hooks, avoiding prop drilling, implementing media queries and all the other bumps along the way.

These are only some of the challenges I ran into but, they greatly improved and reinforced my understanding of JavaScript and React 


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

- [ ]  Add a user log in
- [ ]  Include TV shows in the user search
- [ ]  Add a trailer to the movie info page 

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/challenges) - The awsome site that provided the design files and inspiration for this project 

- [Understanding React Re-Renders](https://blog.logrocket.com/how-when-to-force-react-component-re-render/) - Super useful article that helped me better understand when/why React re-renders

- [Comparing objects](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/) - Another useful post to better understand the not so intiuitive aspects of object comparisons 

## Author

- Personal Website - [Here!](https://allanmartinez.me/)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

