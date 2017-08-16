import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FlashCard } from '../../common/flashCard';
import { Deck } from '../../common/deck';


@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  private listOfFlashCards: Array<FlashCard>;
  private text: String;
  private title:String;

  private currentCard: FlashCard;

  constructor(public navCtrl: NavController,private navParams: NavParams) {

    let selectedDeck = navParams.get('selectedDeck');

    this.listOfFlashCards = selectedDeck.getFlashCards();
    
    this.currentCard = this.listOfFlashCards.pop();

    this.text = this.currentCard.getQuestion();
    this.title = selectedDeck. getDeckName();
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
}
