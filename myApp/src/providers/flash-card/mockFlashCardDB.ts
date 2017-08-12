import {FlashCard} from '../../common/flashCard';

export class MockFlashCardDB {

    private flashCardList: Array<FlashCard>;
  constructor() {
   
  }

  generateDeck()
  {
      this.flashCardList = [];
      this.flashCardList.push(new FlashCard("What is my name", "Justin"));
      this.flashCardList.push(new FlashCard("Where do I live", "Pittsburgh"));

      this.flashCardList.forEach(e=> console.log(e));
      return this.flashCardList;
  }
}
