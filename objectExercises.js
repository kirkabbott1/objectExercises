// function like() {
//   this.timesLiked++;
//   console.log(this.timesLiked);
// }
// var pic1 = {
//   url: 'lolcat.jpg',
//   timesLiked: 0
// };
// // pic1.like = like;
// var pic2 = {
//   url: 'chucknorris.jpg',
//   timesLiked: 0
// };
// // pic2.like = like;
// //
// // pic1.like();
// // pic2.like();
//
// function hate() {
//   this.timesLiked--;
//   console.log(this.timesLiked);
// }
// hate.apply(pic1);
// hate.apply(pic2);
// function showInfo() {
//   console.log()
// }
// var mom = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   eyeColor: 'brown',
//   hairColor: 'black'
//
// };
// var daughter = {
//   firstName: 'Ilene',
//   hairColor: 'brown'
// };
// daughter.__proto__ = mom;
// console.log(daughter.firstName, daughter.lastName, daughter.eyeColor, daughter.hairColor);

// function Character () {
// }
//
// Character.prototype.attack = function(enemy) {
//   enemy.health -= this.power;
// };
// function Hero() {
//   this.name = 'Hero';
//   this.health = 10;
//   this.power = 5;
// }
// Hero.prototype = Object.create(Character.prototype);
//
// Hero.prototype.attack = function(enemy) {
//   if (Math.random < .2) {
//     enemy.health -= this.power * 2;
// } else {
//   enemy.health -= this.power;
//  };
  // };
// var Json = new Hero();
// Jason.attack();

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
};
