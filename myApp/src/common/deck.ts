import { FlashCard } from '../common/flashCard';

export class Deck {

    private deckName:String;

    private flashCards:FlashCard[];

     constructor(deckName:String) {
      this.deckName = deckName;
  }

  getDeckName()
  {
      return this.deckName;
  }

  getFlashCards()
  {
      return this.flashCards;
  }

  addFlashCardToDeck(flashCard: FlashCard)
  {
      if(this.flashCards === undefined)
        {
            this.flashCards = [];
        }
        this.flashCards.push(flashCard);
  }

  shuffle() {
    var currentIndex = this.getFlashCards().length, temporaryValue, randomIndex;
console.log(currentIndex)
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.flashCards[currentIndex];
      this.flashCards[currentIndex] = this.flashCards[randomIndex];
      this.flashCards[randomIndex] = temporaryValue;
    }

    return this.flashCards;
  }
}