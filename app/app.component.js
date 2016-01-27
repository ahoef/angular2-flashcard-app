System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var AppComponent, FLASHCARDS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            // decorator syntax
            AppComponent = (function () {
                function AppComponent() {
                    this.flashcards = FLASHCARDS;
                    this.cardIndex = Math.floor((Math.random() * FLASHCARDS.length));
                    this.cardOrderIndex = [];
                    this.answerHidden = true;
                }
                /**
                 * Toggle this value to false to show answer
                 * @returns {undefined}
                 */
                AppComponent.prototype.showAnswer = function () {
                    this.answerHidden = false;
                };
                /**
                 * Save current card index to an array, update to a new card index, and hide answer
                 * @returns {undefined}
                 */
                AppComponent.prototype.goToNextCard = function () {
                    this.cardOrderIndex.push(this.cardIndex);
                    this.cardIndex = Math.floor((Math.random() * FLASHCARDS.length));
                    this.answerHidden = true;
                };
                /**
                 * Removes last item from card order array, and hide answer
                 * @returns {undefined}
                 */
                AppComponent.prototype.goToPrevCard = function () {
                    if (this.cardOrderIndex.length > 0) {
                        this.cardIndex = this.cardOrderIndex.pop();
                        this.answerHidden = true;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/partials/flashcard.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            // create a var FLASHCARDS of interface type Flashcard, defined above
            FLASHCARDS = [
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
            core_2.enableProdMode();
        }
    }
});
//# sourceMappingURL=app.component.js.map