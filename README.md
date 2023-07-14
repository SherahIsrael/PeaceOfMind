# PeaceOfMind - JavaScript Project

## Table of contents

- [About](#about)
  - [Website Content](#website-content)
  - [Link to Live Site](#link-to-live-site)
- [My process](#my-process)
  - [Tech Stack](#tech-stack)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## About

This is a website where users can set the mood of the website and generate inspirational quotes using an API. The aim of this project was to 
create a javascript website with minimal HTML and CSS.

### Website Content

The user starts off with a simple layout and background. They can decide the mood, the duration that the music and video would 
play and decide if they would like to generate inspirational quotes:

![image](https://github.com/SherahIsrael/PeaceOfMind/assets/125824475/35378aed-26ae-4a40-8961-a0b8aae0aa04)

Nature Example:

![image](https://github.com/SherahIsrael/PeaceOfMind/assets/125824475/33a54caf-9a75-4663-b095-92bc756150af)

Rain Example:

![image](https://github.com/SherahIsrael/PeaceOfMind/assets/125824475/37de6aa9-98c0-4989-9ea5-0b64562faf3d)

Under the Sea Example:

![image](https://github.com/SherahIsrael/PeaceOfMind/assets/125824475/fff4a5b4-010c-4a84-850c-774975ee06ba)

Snowy Example:

![image](https://github.com/SherahIsrael/PeaceOfMind/assets/125824475/95dfc752-962b-4da4-8bdf-d990f74c09e7)

Waves Example:

![image](https://github.com/SherahIsrael/PeaceOfMind/assets/125824475/114a53c0-8a23-4fc8-a9d7-0bc911bcd98f)

### Link to Live Site

Live Site: https://getsomepeaceofmind.netlify.app/

## My Process

### Tech Stack

- HTML5 markup
- CSS
- JavaScript
- Quote API

### What I learned

One of the biggest issues I had was getting the music, the video and the timer to stop when the timer reached 00:00. When the timer 
reached 0 it kept on decreasing into the negatives and even when I placed the time variable in an if statement the clearInterval()
function had no effect on it. I solved this problem using this code:

```
if(time >= 1) {
        time--;
    } else {
        song.pause()
        background.pause()
        background.style.display = "none"
        play.src = '/images/play.svg'
        countdown.innerHTML = "00:00"
    }
```

For the stop button, I had to pause the timer reset the duration and redeclare the time inside of the function to stop the timer from
speeding up when a new duration was selected and played.

```
function stopping() {
    song.pause()
    background.pause()
    background.style.display = "none"
    play.src = '/images/play.svg'
    clearInterval(timer)
    countdown.innerHTML = "00:00"
    duration = 0
    time = duration * 60
}
```

Through this project I doscovered the file size limitaions of Github. The original videos I had for the mood backgrounds were in 4K.
These files were too big for netlify's Large Media and Git's LFS, even with compression to a lower quality. To overcome this I 
simplified the backgrounds with shorter 720p videos which are a maximum of 1 minute long.

## Author 

Sherah Israel

## Acknowledgments

I was inspired by the meditation app found on the link below for this project.

https://dev.to/simonholdorf/9-awesome-projects-you-can-build-with-vanilla-javascript-2o1b
