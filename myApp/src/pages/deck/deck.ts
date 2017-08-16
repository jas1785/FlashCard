import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeckProvider } from '../../providers/deck/deck';
import { FlashCard } from '../../common/flashCard';
import { Deck } from '../../common/deck';
import { CardPage } from '../../pages/card/card';

/**
 * Generated class for the DeckPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deck',
  templateUrl: 'deck.html',
})
export class DeckPage implements OnInit{
  
  private decks;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private deckProvider:DeckProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeckPage');
  }

   ngOnInit(): void {
    console.log("on init");
    this.findDecks();
  }

  /**
   * Gets All the cards from the Service
   */
  findDecks()
  {
    var flashCards =[];
     this.deckProvider.getAllDecksAndCards().subscribe(data => {
      data.forEach(
        (payload) => {
          flashCards.push(
            new FlashCard(payload.question, payload.answer, payload.deck))
        })
    },
      (error) => { console.log(error); },
      () => {
        console.log(flashCards);
        return this.sortDecks(flashCards);
      });
  }

  /**
   * Searchs all flash cards to find all the decks
   * @param flashCards 
   */
  sortDecks(flashCards:FlashCard[])
  {
    var deck=[];
    flashCards.forEach(
      (card) =>{
        if(deck.indexOf(card.getDeckName()) == -1)
          {
            deck.push(card.getDeckName());
          }
      }
    );
    console.log(deck);
    this.groupFlashCardsByDeck(deck, flashCards);
  }

  /**
   * Groups flashcards by the deck strings so they can be displayed for selection
   * @param deck 
   * @param flashCards 
   */
  groupFlashCardsByDeck(deck:any[], flashCards:FlashCard[])
  {
    var decks = [];
    deck.forEach((aDeck)=>{
      var newDeck = new Deck(aDeck);

      flashCards.forEach((aCard)=>{

        if(aCard.getDeckName() ===  aDeck)
          {
            newDeck.addFlashCardToDeck(aCard);
          }
      })
      decks.push(newDeck);
    })
    this.decks = decks;
  }

  deckSelected(deck)
  {
    this.navCtrl.push(CardPage,{selectedDeck:deck});
  }
}
