let apiQuotes=[];
const quoteContainer = document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading

function loadind(){
    loader.hidden= false;
    quoteContainer.hidden=true;
}

// hide Laoding

function complete(){
    
    quoteContainer.hidden=false;
    loader.hidden= true;
}

// Show New Quote
function newQuote()
{  loadind();
     // Pick  a random Quotes from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];

    if(quote.text.length>120)
    {
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    
    // check if author is null if yes then replace with unknow
    if(!author.quote){
    author.textContent='Unknown';
    }else{
        author.textContent= quote.author;
    }
    // set Quote,Hide Loader
    quoteText.textContent= quote.text;
    complete();
}

// GEt Quotes from API
async function getQuotes()
{   loadind();
    const apiUrl= 'https://type.fit/api/quotes';
    try {
        
        const response = await fetch(apiUrl);
        apiQuotes =await response.json();
        newQuote();
       

    } 
    catch (error) {
        
    }
}


//  Tweet the Quote

function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(twitterUrl,'_blank');
}
// Event Listeners
newQuoteBtn.addEventListener("click",newQuote);
twitterBtn.addEventListener("click",tweetQuote);

//on load
getQuotes();

