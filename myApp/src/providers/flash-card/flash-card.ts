import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the FlashCardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FlashCardProvider {

  constructor(private http:Http) {
    console.log('Hello FlashCardProvider Provider');
  }

   findListOfFlashCards()
  {
    return this.http.get('https://flashcard-aedcb.firebaseio.com/.json').map(res => res.json());
  }
}
