`Quote Generator Project`


# View Project :[Live Demo](https://milindpawar007.github.io/quote-generator/index.html) of this project for peer review.
=======================================

This is an app that randomly generates quotes on clicking 
of the New Quote Button and tweets the quote on clicking of the 'tweet'
Button. 

* * *

### API Links

 - [API LINK](https://type.fit/api/quotes)

### Skills Learned

- design an algorithm to meet a specification
- implement the JavaScript syntax in a program
- connect JavaScript and HTML using HTML DOM

### Technology

- HTML5
- CSS3
- vanilla JS
- Git / Github

Project Requirements
====================

## Create an array of JS objects to hold the data for the quotes.
Each quote should have the following properties:
- [x] A `quote` property which contains a string: the text of the quote to display on the page.
- [x] A `source` property which contains a string identifying the creator of the quote.
- [x] An optional `citation` property which contains a string identifying the publication the quote appears in.

## Create a function named `getQuotes` which:
- [x] selects a random quote object from the quotes array
- [x] returns the randomly selected quote objects

## Create a function named `newQuote` which follows these rules:
- [x] `getQuotes` calls the `newQuote` function and stores the returned quote object in a variable.
- [x] `getQuotes` constructs a string using the different properties of the quote object using the following HTML template
