var d = new Date();
// console.log(d.getDate());
// console.log(d.getDay());

var option = {
  weekday : "long",
  day : "numeric",
  month : "long",
  year : "numeric"
}

var day = d.getDay();

console.log(d.toLocaleString("hi-IN",option))

// if(day === 6 || day === 0){
//     console.log("Weekend")
// }
// else{
//     console.log("Working")

// switch (day) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");  
//     break;

//   default:
//     console.log("error");
//     break;
// }
