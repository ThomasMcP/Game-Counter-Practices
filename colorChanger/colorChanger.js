const button = document.querySelector("button");
console.log(button);

let isPurple = false;
// button.addEventListener("click", function(){
//   if (isPurple) {
//     document.body.style.background = 'white';
//   } else {
//     document.body.style.background = 'purple';
//   }
//   isPurple = !isPurple
// });

button.addEventListener("click", function(){
  document.body.classList.toggle('purple');
});
