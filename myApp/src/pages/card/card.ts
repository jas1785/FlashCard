import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlashCardProvider } from '../../providers/flash-card/flash-card';
import { FlashCard } from '../../common/flashCard';


@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  private listOfFlashCards: Array<FlashCard>;
  private text: String;

  private currentCard: FlashCard;

  constructor(public navCtrl: NavController, private aFlashCardProvider: FlashCardProvider) {

    this.listOfFlashCards = [];

    this.aFlashCardProvider.findListOfFlashCards().subscribe(data => {
      data.forEach(
        (payload) => {
          this.listOfFlashCards.push(
            new FlashCard(payload.question, payload.answer))
        })
    },
      (error) => { console.log(error); },
      () => {

        this.shuffle(this.listOfFlashCards);
        this.currentCard = this.listOfFlashCards.pop();
        this.text = this.currentCard.getQuestion();
      });
  }

  onClickAnswer() {
    this.text = this.currentCard.getAnswer();
  }

  onClickNextCard() {
    if (this.listOfFlashCards.length > 0) {
      this.currentCard = this.listOfFlashCards.pop();
      this.text = this.currentCard.getQuestion();
    }
    else {
      //send to screen with no cards left select new deck
      console.log("no more cards");
    }
  }

  onClickSkip() {
    console.log("not implemented yet");
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
