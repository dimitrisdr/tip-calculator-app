# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](screenshot.jpeg)


### Links

- Solution URL: [Add solution URL here](https://github.com/dimitrisdr/tip-calculator-app.git)
- Live Site URL: [Add live site URL here](https://dimitrisdr.github.io/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```css

.dollar-sign::before {
    content: '';
    background: url('images/icon-dollar.svg') no-repeat left center;
    width: 1rem;
}
```
```js
inputs.forEach(input => input.addEventListener('input', handleInputs))
tipBtns.forEach(btn => btn.addEventListener('click', handleTipBtns))
resetBatn.addEventListener('click', resetValues)
```

in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@dimitrisdr](https://www.frontendmentor.io/profile/dimitrisdr)
