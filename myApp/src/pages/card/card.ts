import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlashCardProvider } from '../../providers/flash-card/flash-card';
import {FlashCard} from '../../common/flashCard';


@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  private listOfFlashCards:Array<FlashCard>;
  private text:String;

  private currentCard:FlashCard;

  constructor(public navCtrl: NavController, private aFlashCardProvider: FlashCardProvider) {
    
    this.listOfFlashCards = this.aFlashCardProvider.findListOfFlashCards();

    this.currentCard = this.listOfFlashCards.pop();
    this.text = this.currentCard.getQuestion();
    console.log(this.aFlashCardProvider.findListOfFlashCards());
  }

  onClickAnswer()
  {
    this.text = this.currentCard.getAnswer();
  }

  onClickNextCard()
  {
    console.log(this.listOfFlashCards);
    if(this.listOfFlashCards.length>0)
      {
        this.currentCard = this.listOfFlashCards.pop();
        this.text = this.currentCard.getQuestion();
      }
    else
      {
        //send to screen with no cards left select new deck
       console.log("no more cards");
      }
  }

  onClickSkip()
  {
    console.log("not implemented yet");
  }
}
