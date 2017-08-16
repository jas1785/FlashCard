import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeckProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeckProvider {

  constructor(public http: Http) {
    console.log('Hello DeckProvider Provider');
  }

  getAllDecksAndCards()
  {
    return this.http.get('https://flashcard-aedcb.firebaseio.com/.json').map(res => res.json());
  }
}
