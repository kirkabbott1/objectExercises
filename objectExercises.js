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

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'

};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};
daughter.__proto__ = mom;
console.log(daughter.firstName, daughter.lastName, daughter.eyeColor, daughter.hairColor);
