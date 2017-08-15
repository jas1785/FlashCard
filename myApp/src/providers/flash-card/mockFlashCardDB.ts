import {FlashCard} from '../../common/flashCard';


export class MockFlashCardDB {

    private flashCardList: Array<FlashCard>;
  constructor() {
   
  }
  private dbString =[
 {
   "question": "What is Polymorphism?",
   "answer": "Ability to identifiy a function to run.  2 Types complie time(Overloading) and runtime(Overridding)."
 },
 {
   "question": "Method Overriding?",
   "answer": "Method has the same signature as method in the parent class.  Determined at runtime not compile time"
 },
 {
   "question": "Overloading?",
   "answer": "Determined at compile time.  It happens when several methods have the same name But Different 1. Different Method Signature and different type of paramters 2. Same method signature but different number of parameters. 3. Sem method and same number of paramters but different type"
 },
 {
   "question": "Inheritance",
   "answer": "Allows a child class to inherit poperties from its parent class.  (Extends)"
 },
 {
   "question": "What Properties can be accesseed through Inheritance?",
   "answer": "Public and protected"
 },
 {
   "question": "Does JAVA support multiple Inheritance?",
   "answer": "No."
 },
 {
   "question": "Difference between Poly morphism and inheritance?",
   "answer": "Inheritance definces parent-child relationship between 2 classes.  Polymorphism take advantage of the relationsip to add dynamic behavior. Inheritance helps in code reusability by allowing child class to inherit behavior from the parent class. On the other hand Polymorphism allows Child to redefine already defined behaviour inside the parent class. Without Polymorphism it's not possible for a Child to execute its own behaviour while represented by a Parent reference variable, but with Polymorphism it can be done. Java doesn't allow multiple inheritance of classes, but allows multiple inheritance of Interface, which is actually require to implement Polymorphism. For example a Class can be Runnable, Comparator and Serializable at same time, because all three are interfaces. This makes them to pass around in code e.g. you can pass instance of this class to a method which accepts Serializable, or to Collections.sort() which accepts a Comparator.  Both Polymorphism and Inheritance allow Object oriented programs to evolve. For example, by using Inheritance you can define new user types in an Authentication System and by using Polymorphism you can take advantage of already written authentication code. Since, Inheritance guarantees minimum base class behaviour, a method depending upon super class or super interface can still accept object of base class and can authenticate it."
 },
 {
   "question": "What is abstraction?",
   "answer": "Abstraction is a way of converting real world objects in terms of class. Its a concept of defining an idea in terms of classes or interface. For example creating a class Vehicle and injecting properties into it"
 },
 {
   "question": "What is Encapsulation?",
   "answer": "The encapsulation is achieved by combining the methods and attribute into a class. The class acts like a container encapsulating the properties. The users are exposed mainly public methods.The idea behind is to hide how thinigs work and just exposing the requests a user can do."
 },
 {
   "question": "What is Association?",
   "answer": "Association is a relationship where all object have their own lifecycle and there is no owner. Let's take an example of Teacher and Student. Multiple students can associate with a single teacher and single student can associate with multiple teachers but there is no ownership between the objects and both have their own lifecycle. Both can create and delete independently."
 },
 {
   "question": "What is Aggregation?",
   "answer": "Aggregation is a specialize form of Association where all object have their own lifecycle but there is ownership and child object can not belongs to another parent object. Let's take an example of Department and teacher. A single teacher can not belongs to multiple departments, but if we delete the department teacher object will not destroy. We can think about \"has-a\" relationship."
 },
 {
   "question": "What is Composition ?",
   "answer": "Composition is again specialize form of Aggregation and we can call this as a \"death\" relationship. It is a strong type of Aggregation. Child object dose not have their lifecycle and if parent object deletes all child object will also be deleted. Let's take again an example of relationship between House and rooms. House can contain multiple rooms there is no independent life of room and any room can not belongs to two different house if we delete the house room will automatically delete."
 }
];
  generateDeck()
  {
        this.flashCardList = [];
      this.dbString.forEach((data)=>{
          this.flashCardList.push(new FlashCard(data.question, data.answer));
      })
      this.flashCardList.forEach(e=> console.log(e));

      this.shuffle(this.flashCardList);
      return this.flashCardList;
  }

   shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

}
