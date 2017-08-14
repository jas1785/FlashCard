import {FlashCard} from '../../common/flashCard';

export class MockFlashCardDB {

    private flashCardList: Array<FlashCard>;
  constructor() {
   
  }

  generateDeck()
  {
      this.flashCardList = [];
      this.flashCardList.push(new FlashCard("What is my name aldjf lakdfj laskdfj lasdkjf lasdkfj asldkfj las;dkf jlaskdfjlasd fjlad fjlads fjl;asd flsdakfjlsad fjlas df;lsad fjl jdsa;", "KSDLfjalsjdfldkjflaskfjdlakjdsfl;asjkdfl;asdkjfl;adskjf;ladskjf  ald;fkj jaldjf a ldkfjaldskf ;a aldkfj lak aldskfj alsdfj alsdf ;alksdf asdkf "));
      this.flashCardList.push(new FlashCard("Where do I live", "Pittsburgh"));

      this.flashCardList.forEach(e=> console.log(e));
      return this.flashCardList;
  }
}
