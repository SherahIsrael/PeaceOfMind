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
    
    

    

    





