export class FlashCard {

    private question:String;
    private answer:String;
  
  constructor(question:String, answer:String) {
      this.answer = answer;
      this.question = question;
  }

    getAnswer():String
    {
        return this.answer;
    }

    getQuestion():String
    {
        return this.question;
    }
}
