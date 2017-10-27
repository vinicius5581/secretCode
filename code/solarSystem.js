let planetTypes = ['Terrestrial planets', 'Jovian planets', 'dwarf planet'];

class Planet {
  constructor(name, order, diameter, orbit, day) {
    this.name = name;
    this.order = order; // Relative to Sun
    this.diameter = diameter; // Miles
    this.orbit = orbit; // Earth days
    this.day = day; // Earth days
  }
  toString() {
    return `${this.name} - diameter: ${this.diameter} miles - orbit: ${this.orbit} Earth days - day: ${this.day} Earth days`;
  }
}


const Mercury = new Planet('Mercury', 1, 3031, 88, 58.6);
const Venus = new Planet('Venus', 2, 7521, 225, 241);
const Earth = new Planet('Earth', 3, 7521, 365.24, 1);
const Mars = new Planet('Mars', 4, 4217 , 687, 1);
const Jupiter = new Planet('Mars', 5, 86881 , 687, 1);

console.log(Mercury.toString());

// class Square extends Polygon {
//   constructor(sideLength) {
//     super(sideLength, sideLength);
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set sideLength(newLength) {
//     this.height = newLength;
//     this.width = newLength;
//   }
// }
//
// var square = new Square(2);
