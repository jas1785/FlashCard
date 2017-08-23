import { Component, Output, EventEmitter, Input,SimpleChange } from '@angular/core';
import { AlertController,NavController,NavParams } from 'ionic-angular';
import { FlashCard } from '../../common/flashCard';
import { DeckPage } from '../../pages/deck/deck';

/**
 * Generated class for the ResetDeckComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'reset-deck',
  templateUrl: 'reset-deck.html'
})
export class ResetDeckComponent {

  @Input()
  private currentDeck:Array<FlashCard>;

  constructor(private alertController:AlertController, private navCtrl: NavController, public navParams: NavParams, ) {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes);
    console.log(this.currentDeck);
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
       console.log(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        console.log(`${propName} changed from ${from} to ${to}`);
      }
    }

    if(this.currentDeck !=undefined)
      {
         this.generateConfirmationBox();
      }
  }
  setInputCardListToUndefined()
  {
    this.currentDeck = undefined;
  }
  generateConfirmationBox()
  {
    let confirmAlert =  this.alertController.create({
      title: 'No More Flash Cards Left',
      message: 'Please select a new deck',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
            confirmAlert.dismiss(this.navCtrl.push(DeckPage,{'resetDeck':this.currentDeck}));
        //    this.currentDeck = undefined;
            return false;
          }
        }
      ]
    });
    confirmAlert.present();
  }
}
