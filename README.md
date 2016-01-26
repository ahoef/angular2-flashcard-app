# Angular2 Flashcard App

A basic Angular2 app written with TypeScript and Sass. Users can view flashcard questions, click to reveal answers, and paginate forward and backward through cards.

[http://www.ahoef.co/flashcards](www.ahoef.co/flashcards)


### Development 

##### Install Dependencies
Clone or fork this repo, run `npm install` from the directory, then run `npm start`, and you're all set! A local server will be started at port 3000.


##### Compile styles
`$ sass --watch css/src/site.scss:css/dist/styles.css
 
##### Go nuts!
I chose to set up my flashcard content around photography, but you could easily change the questions and answers to whatever you'd like to study. Here's the schema for a card:

```javascript
{
	word: "reticent",
	definition: "tightlipped, not prone to saying much, reluctant",
	example: "Paul was reticent and preferred observing others mannerisms."
}
```

##### Also check out
[https://github.com/ahoef/es2015-flashcard-app](A vanilla ES2015 version of this app)

[https://github.com/ahoef/react-redux-flashcard-app](A React & Redux version of this app)