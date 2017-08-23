import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FlashCard } from '../../common/flashCard';
import { Deck } from '../../common/deck';
import { ResetDeckComponent } from '../../components/reset-deck/reset-deck';


@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage implements OnInit {

  private listOfFlashCards: Array<FlashCard>;
  private text: String;
  private title: String;
  private listOfUsedCards: Array<FlashCard>;
  private displayChild: boolean;

  private currentCard: FlashCard;

  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }
  ngOnChanges() {
    console.log("on do check");


    let selectedDeck = this.navParams.get('selectedDeck');
    if (selectedDeck != undefined && selectedDeck.length != 0) {
      this.listOfFlashCards = selectedDeck.getFlashCards();
    }
    else {
      this.listOfFlashCards = this.listOfUsedCards;
    }
    console.log(this.listOfUsedCards);
    this.currentCard = this.listOfFlashCards.pop();

    this.text = this.currentCard.getQuestion();
    this.title = selectedDeck.getDeckName();
  }
  ngOnInit(): void {
    console.log("on init");

    let selectedDeck = this.navParams.get('selectedDeck');
    if (selectedDeck != undefined && selectedDeck.getFlashCards().length != 0) {
      this.listOfFlashCards = selectedDeck.getFlashCards();
    }
    else {
      this.listOfFlashCards = this.listOfUsedCards;
    }
    console.log(this.listOfUsedCards);
    this.currentCard = this.listOfFlashCards.pop();

    this.text = this.currentCard.getQuestion();
    this.title = selectedDeck.getDeckName();
  }

  onClickAnswer() {
    this.text = this.currentCard.getAnswer();
  }

  advanceCard() {
    this.currentCard = this.listOfFlashCards.pop();
    this.text = this.currentCard.getQuestion();
  }
  onClickNextCard() {

    //determine if we have any cards left
    if (this.listOfFlashCards.length > 0) {
      this.advanceCard();
      //add old card to used deck
      this.addCardToUsedDeck(this.currentCard);

    }
    else {
      //send to screen with no cards left select new deck
      console.log("no more cards");
      this.updateDisplayChild(true);
      console.log(this.listOfUsedCards);
      //add old card to used deck
      this.addCardToUsedDeck(this.currentCard);
    }
  }

  updateDisplayChild(diplayChild: boolean) {
    this.displayChild = diplayChild;
  }
  onClickSkip() {
    this.addCardToUsedDeck(this.currentCard);

    if (this.listOfFlashCards.length == 0) {
      this.updateDisplayChild(true);
    }
    else {
      this.advanceCard();
    }
  }

  addCardToUsedDeck(flashCard: FlashCard) {
    if (this.listOfUsedCards === undefined) {
      this.listOfUsedCards = [];
    }
    this.listOfUsedCards.push(flashCard);
  }
}