# Entertainment web app

## Table of contents

- [Overview](#overview)    
  - [Screenshots](#screenshots)
  - [Links](#links)
- [The Process](#the-process)
  - [Goals](#goals)
  - [Built with](#built-with)
- [Lessons Learned](#lessons-learned) 
  - [Data Validation](#data-validation)
  - [React Re-Rendering](#react-re-rendering)
  - [Object Comparison](#object-comparison)
- [Future Features](#future-features)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is an entertainemnt app that displays movies and TV shows. Users can search for a title and see a collection of movies matching that title. Alternatively, there is a collection of different genres, including a trending section, on the TV and Movie pages.

Users can click on any title to see more information including a rating, runtime and plot overview.

Any title can also be added to a users bookmark collection. Bookmarks are saved to `localStorage`.
### Screenshots

Home screen
![home screen](./src/assets/screenshots/home.png?raw=true)

Search results
![example search results](./src/assets/screenshots/results.png?raw=true)

Clicking on a movie
![movie info](./src/assets/screenshots/focused.png?raw=true)

Bookmarks page
![bookmarks page](./src/assets/screenshots/bookmarks.png?raw=true)
### Links
- [Live Demo](https://entertainment-app-4ce2a.web.app/)

## The process

### Goals
I want to learn, implement and understand the advantages of React Router and CSS Grid while also gaining more experience building React applications. 

The various pages required for this project make it a great opportunity to dive into React Router and the gallery style layout of the movies looks like a prime candidate for a Grid implementation. This project will also help me practice using stateful variables, Hooks and reusable components to build an interactive UI.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [TMDB API](https://www.themoviedb.org/documentation/api?language=en-US)
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/en/main) - React routing library

## Lessons Learned

This project presented many challenges and even more learning opportunities. Below are some notes on key lesson I learned that hopefully save someone the struggle of learning them the hard way.

### **Data Validation**

 Problem
 * I was attempting to access a `release_date` property that didn't exist on some media objects returned by TMDB. As a result, searching for certain movies would cause a black screen along with Error: Cannot read property 'slice' of undefined
 
Solution

 * Use short circuit evaluation to only render a property if it exists. In my case: 
 ```js
 { movie.release_date && 
    <p>
        {movie.release_date.slice(0,4)}
    </p> 
}
 ```
 * The right side of the `&&` operator will only render if the left side is truthy. This prevents acessing properties that don't exist

 Alternatives

 * According to [this article](https://medium.com/geekculture/stop-using-for-conditional-rendering-in-react-a0f7b96200f8), you could use a ternary operator to accomplish the same thing
 ```js
 { movie.release_date 
    ? <p>{movie.release_date.slice(0,4)}</p> 
    : null 
}

 ```

 ### **React Re-Rendering**

Problem

 * Clicking on a movie bookmark button was not filling in the bookmark icon. The movie was being added to a stateful `favorites` array but no re-render occurred
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

### **Object Comparison**

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
* The code above only evaluates to `true` if the two values reference the same object instance. This was was the case before refreshing, since all movie object instances came from TMDB. After refreshing, `favorites` is retrieved from `localStorage` and any movie objects in `favorites` now have a different reference than those fetched from TMDB. As a result, using `inFavs` to compare two value identical movies, one from TMDB and the other from `localStorage`, evaluates to `false`
* To avoid this reference comparison I manually compared the `id` property of both movies
```js
const inFavs = favorites.some(fav => fav.id === movie.id)
```
## Closing Thoughts
Not included in this list are the challenges faced and lessons learned from using React Router, implementing CSS Grid, using React Hooks, avoiding prop drilling, using media queries and all the other bumps along the way.

Together these challenges greatly improved and reinforced my understanding of JavaScript and React. 

## Future Features
- [ ]  Add a user login
- [ ]  Include TV shows in the user search
- [ ]  Add a trailer to the movie info page 

## Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/challenges) - The awesome site that provided the design files and inspiration for this project 

- [Understanding React Re-Renders](https://blog.logrocket.com/how-when-to-force-react-component-re-render/) - Super useful article that helped me better understand when/why React re-renders

- [Comparing objects](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/) - Another useful post to better understand the not so intuitive aspects of object comparisons 

- [Great guide](https://ui.dev/react-router-tutorial) for React Router. I didn't use anywhere near all the topics covered and will definitely be coming back to reference it in future projects. 

## Author

- Personal Website - [Here!](https://allanmartinez.me/)
- LinkedIn - [This way!](https://www.linkedin.com/in/allan-martinez-ab8848252/)


## Acknowledgments
I want to give another huge thanks to [Frontend Mentor](https://www.frontendmentor.io/challenges) for the resources and challenges they provide. 