// Quotes Section
const btn = document.getElementById("quoteBtn")
const quote = document.getElementById("quote")
const author = document.getElementById("author")

// Calling to Quotes API
generateQuote = async () => {
    
    const response = await fetch("https://type.fit/api/quotes")
    // Convert to workable JSON format
    const quotesAPI = await response.json()
    return quotesAPI
}

// Displaying API data when button clicked
btn.addEventListener('click', async () => {
    let quotesAPI = []

    try {
        quotesAPI = await generateQuote()
    } catch (error) {
        console.log(error)
    }

    const random = Math.floor(Math.random() * quotesAPI.length)
    const text = quotesAPI[random].text
    const auth = quotesAPI[random].author
    
    quote.innerText = text
    author.innerText = auth
})
    

// Time, Sound and Video Section
const song = document.getElementById("song")  
const play = document.querySelector('.play')  
const countdown = document.getElementById("countdown")

let duration = 10
let time = duration * 60
let min = ''
let sec = ''


// Set Default Countdown
function updateCountdown() {
    let min = Math.floor(time / 60)
    let sec = time % 60
    
    if(sec < 10) {
        sec = '0' + sec
    } else {
        sec
    }

    countdown.innerHTML = `${min}:${sec}`
    if(time >= 1) {
        time--;
    } else {
        song.pause()
        background.pause()
        background.style.display = "none"
        play.src = '/images/play.svg'
        countdown.innerHTML = "00:00"
    }
}



// Set different durations
const FiveMins = document.getElementById("5mins")
const TenMins = document.getElementById("10mins")
const FifteenMins = document.getElementById("15mins")
const TwentyMins = document.getElementById("20mins")
const TwentyFiveMins = document.getElementById("25mins")
const ThirtyMins = document.getElementById("30mins")

FiveMins.addEventListener('click', () => {
    duration = 1 /10
    time = duration * 60
    updateCountdown()
    clearInterval(timer)
    song.pause();
    background.pause();
    play.src = '/images/play.svg'
})

TenMins.addEventListener('click', () => {
    duration = 10
    time = duration * 60
    updateCountdown()
    clearInterval(timer)
    song.pause();
    background.pause();
    play.src = '/images/play.svg'
})

FifteenMins.addEventListener('click', () => {
    duration = 15
    time = duration * 60
    updateCountdown()
    clearInterval(timer)
    song.pause();
    background.pause();
    play.src = '/images/play.svg'
})

TwentyMins.addEventListener('click', () => {
    duration = 20
    time = duration * 60
    updateCountdown()
    clearInterval(timer)
    song.pause();
    background.pause();
    play.src = '/images/play.svg'
})

TwentyFiveMins.addEventListener('click', () => {
    duration = 25
    time = duration * 60
    updateCountdown()
    clearInterval(timer)
    song.pause();
    background.pause();
    play.src = '/images/play.svg'
})

ThirtyMins.addEventListener('click', () => {
    duration = 30
    time = duration * 60
    updateCountdown()
    clearInterval(timer)
    song.pause();
    background.pause();
    play.src = '/images/play.svg'
})

// Play sound
play.addEventListener('click', () => {
    checkPlaying(song);
})

let timer

// Pause sound and timer
const checkPlaying = song => {

    if(song.paused){
        song.play();
        background.play()
        play.src = '/images/pause.svg'
        timer = setInterval(updateCountdown, 1000)
    } else {
        song.pause();
        background.pause();
        play.src = '/images/play.svg'
        clearInterval(timer)
    }
}

// Stop and Reset time, sound and video
let stop = document.getElementById("stop")

stop.addEventListener('click', stopping)
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

let nature = document.getElementById("nature")
let rain = document.getElementById("rain")
let snowy = document.getElementById("snowy")
let fish = document.getElementById("fish")
let waves = document.getElementById("waves")
const body = document.getElementById("body")

const background = document.getElementById("background");


// Change Background Video

nature.addEventListener('click', changeToNature)
rain.addEventListener('click', changeToRain)
snowy.addEventListener('click', changeToSnowy)
fish.addEventListener('click', changeToUnderwater)
waves.addEventListener('click', changeToWaves)

function changeToNature() {
    background.src="videos/nature.mp4"
    background.style.display = "block"
    song.src="music/nature.mp3"
    play.src = '/images/play.svg'
    clearInterval(timer)
}

function changeToRain() {
    background.src="videos/rain.mp4"
    background.style.display = "block"
    song.src="music/rain.wav"
    play.src = '/images/play.svg'
    clearInterval(timer)
}

function changeToSnowy() {
    background.src="videos/snowy.mp4"
    background.style.display = "block"
    song.src="music/snowy.mp3"
    play.src = '/images/play.svg'
    clearInterval(timer)
}

function changeToUnderwater() {
    background.src="videos/underwater.mp4"
    background.style.display = "block"
    song.src="music/underwater.mp3"
    play.src = '/images/play.svg'
    clearInterval(timer)
}

function changeToWaves() {
    background.src="videos/waves.mp4"
    background.style.display = "block"
    song.src="music/waves.mp3"
    play.src = '/images/play.svg'
    clearInterval(timer)
}








