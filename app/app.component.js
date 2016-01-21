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
    var core_1;
    var AppComponent, FLASHCARDS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    question: "Will a higher or lower f/stop create a blurry background?",
                    answer: "The lower the f/stop — the larger the opening in the lens — the less depth of field — the blurrier the background.",
                    source: "Nikon - Understanding Maximum Aperture",
                    sourceUrl: "http://www.nikonusa.com/en/learn-and-explore/article/g3cu6o1r/understanding-maximum-aperture.html"
                },
                {
                    question: "What is aperture?",
                    answer: "Aperture refers to the opening of a lens's diaphragm through which light passes. It is calibrated in f/stops and is generally written as numbers such as 1.4, 2, 2.8, 4, 5.6, 8, 11 and 16",
                    source: "Nikon - Understanding Maximum Aperture",
                    sourceUrl: "http://www.nikonusa.com/en/learn-and-explore/article/g3cu6o1r/understanding-maximum-aperture.html"
                },
                {
                    question: "How does aperture affect shutter speed?",
                    answer: "Using a low f/stop means more light is entering the lens and therefore the shutter doesn't need to stay open as long to make a correct exposure which translates into a faster shutter speed.",
                    source: "Nikon - Understanding Maximum Aperture",
                    sourceUrl: "http://www.nikonusa.com/en/learn-and-explore/article/g3cu6o1r/understanding-maximum-aperture.html"
                },
                {
                    question: "What is ISO?",
                    answer: "For digital photography, ISO refers to the sensitivity—the signal gain—of the camera's sensor.",
                    source: "Nikon - ISO Control",
                    sourceUrl: "http://www.nikonusa.com/en/learn-and-explore/article/ga5bvixe/iso-control.html"
                },
                {
                    question: "How is shutter speed measured? ",
                    answer: "In second fractions: 1/500, 1/250, 1/125, 1/60, 1/30, 1/15, 1/8 etc",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/shutter-speed/"
                },
                {
                    question: "How does focal length impact shutter speed?",
                    answer: "Longer focal lengths will accentuate the amount of camera shake you have and so you’ll need to choose a faster shutter speed. ",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/shutter-speed/"
                },
                {
                    question: "What's the 'exposure triangle'?",
                    answer: "ISO, Shutter Speed, Aperture",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/aperture/"
                },
                {
                    question: "What's the 'S' mode on a camera dial?",
                    answer: "Shutter priority is very similar to aperture priority mode but is the mode where you select a shutter speed and the camera then chooses all of the other settings",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/digital-camera-modes/"
                },
                {
                    question: "What's a histogram?",
                    answer: "It graphs the tones in your image from black (on the left) to white (on the right). The higher the graph at any given point the more pixels of that tone that are present in an image. Shoot for an even balance.",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/understanding-histograms/"
                },
                {
                    question: "What is split lighting in portrait photography?",
                    answer: "It splits the face exactly into equal halves with one side being in the light, and the other in shadow. To achieve split lighting simply put the light source 90 degrees to the left or right of the subject, and possibly even slightly behind their head.  ",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/6-portrait-lighting-patterns-every-photographer-should-know/"
                },
                {
                    question: "What is Rembrandt lighting in portrait photography?",
                    answer: "Rembrandt lighting is identified by the triangle of light on the cheek. To create proper Rembrandt lighting make sure the eye on the shadow side of the face has light in it and has a catch light, otherwise the eye will be “dead” and not have a nice sparkle. ",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/6-portrait-lighting-patterns-every-photographer-should-know/"
                },
                {
                    question: "What is butterfly lighting in portrait photography?",
                    answer: "Butterfly lighting is aptly named for the butterfly shaped shadow that is created under the nose by placing the main light source above and directly behind the camera.",
                    source: "Digital Photography School",
                    sourceUrl: "http://digital-photography-school.com/6-portrait-lighting-patterns-every-photographer-should-know/"
                },
                {
                    question: "What's the maximum aerial height for drone photography?",
                    answer: "133 metres (400 feet)",
                    source: "Digital Photography School",
                    sourceUrl: "hhttp://digital-photography-school.com/how-to-use-drones-to-do-stunning-aerial-photography/"
                }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map