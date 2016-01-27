import {Component} from 'angular2/core';
import {enableProdMode} from 'angular2/core';

// Similar to a class. If we only need type checking, the interface is sufficient and lighter weight.
interface Flashcard {
	question: string;
	answer: string;
	source: string;
	sourceUrl: string;
}

// decorator syntax
@Component({
    selector: 'my-app',
    templateUrl: './app/partials/flashcard.html'
})

// export component class
export class AppComponent { 

	public flashcards = FLASHCARDS;
	public cardIndex = Math.floor((Math.random() * FLASHCARDS.length));
	public cardOrderIndex = [];
	public answerHidden = true;

	/**
     * Toggle this value to false to show answer 
     * @returns {undefined}
     */
	showAnswer() {
		this.answerHidden = false;
	}

	/**
     * Save current card index to an array, update to a new card index, and hide answer
     * @returns {undefined}
     */
	goToNextCard() {
		this.cardOrderIndex.push(this.cardIndex);
		this.cardIndex = Math.floor((Math.random() * FLASHCARDS.length));
		this.answerHidden = true;
	}

	/**
     * Removes last item from card order array, and hide answer
     * @returns {undefined}
     */
	goToPrevCard() {
		if (this.cardOrderIndex.length > 0) {
			this.cardIndex = this.cardOrderIndex.pop();
			this.answerHidden = true;
		}
	}
}


// create a var FLASHCARDS of interface type Flashcard, defined above
var FLASHCARDS: Flashcard[] = [
	{
		word: "abate",
		definition: "to reduce in amount, degree, or severity",
		example: "I hope my hunger abates after eating this granola bar."
	},
	{
		word: "aggrandize",
		definition: "to increase in power, influence, and reputation",
		example: "The project manager had a tendency to self-aggrandize."
	},
	{
		word: "erudite",
		definition: "scholarly",
		example: "A Rhodes Scholar, Max was a true erudite, and a formidable opponent on Jeopardy."
	},
	{
		word: "auspicious",
		definition: "favorable",
		example: "The team’s run for the pennant started auspiciously with 24 wins."
	},
	{
		word: "sanguine",
		definition: "cheerful, optimistic",
		example: "A Yale graduate with a 4.0, she was sanguine about finding a job right out of college."
	},
	{
		word: "mercurial",
		definition: "1. Changing one’s personality often and unpredictably. 2. Animated, sprightly",
		example: "One never knew exactly what the professor’s class would be like; he was so mercurial that many of his students thought of him as two different people."
	},
		{
		word: "fastidious",
		definition: "nitpicky",
		example: "A fastidious eater, Herman would only eat the center of anything he touched."
	},
	{
		word: "reticent",
		definition: "tightlipped, not prone to saying much, reluctant",
		example: "Paul was reticent and preferred observing others mannerisms."
	},
	{
		word: "egregious",
		definition: "standing out in a negative way; shockingly bad",
		example: "The dictator’s abuse of human rights was so egregious that many world leaders demanded that he be tried in an international court for genocide."
	},
	{
		word: "chicanery",
		definition: "the use of tricks to deceive someone",
		example: "In their zeal to avoid resurrecting the sport’s reputation for chicanery, they tried to bury the incident."
	},
	{
		word: "aberrant",
		definition: "markedly different from an accepted norm",
		example: "This is a rather aberrant species of Buarremon, as yet only known from Tucuman, where it was discovered by Schulz."
	},
	{
		word: "laud",
		definition: "to praise, glorify, or honor",
		example: "This poses a challenge for Sanders, who must simultaneously laud Obamacare and insist that something much better must replace it."
	},
		{
		word: "cogent",
		definition: "powerfully persuasive",
		example: "The third objection is the most cogent: In the U.S., infrastructure projects take too long and cost too much."
	},
	{
		word: "abstemious",
		definition: "marked by temperance in indulgence",
		example: "He gradually became abstemious in his diet, and in 1765 he began to drink nothing but water."
	},
	{
		word: "efficacy",
		definition: "capacity or power to produce a desired effect",
		example: "By allowing people literally to be the government, just as in ancient Athens, people develop higher levels of political efficacy."
	}
	
];

export enableProdMode();