import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MockFlashCardDB } from './mockFlashCardDB';

import 'rxjs/add/operator/map';

/*
  Generated class for the FlashCardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FlashCardProvider {

  constructor( public aMockFlashCardDB:MockFlashCardDB) {
    console.log('Hello FlashCardProvider Provider');
  }

   findListOfFlashCards()
  {
    return this.aMockFlashCardDB.generateDeck();
  }

}
