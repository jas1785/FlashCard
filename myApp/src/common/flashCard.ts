export class FlashCard {

    private question:String;
    private answer:String;
    private deck:String;
  
  constructor(question:String, answer:String, deck:String) {
      this.answer = answer;
      this.question = question;
      this.deck = deck;
  }

    getAnswer():String
    {
        return this.answer;
    }

    getQuestion():String
    {
        return this.question;
    }

    getDeckName():String
    {
        return this.deck;
    }
}
