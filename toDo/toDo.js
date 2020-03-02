let toDos = ["Buy New Turtle"];

let input = prompt("What would you like to do?");

while(input !== "quit") {

  if (input === "list") {
    toDos.forEach(function(x, i){
      console.log(`${i + 1}: ${x}`);
    })
  } else if (input === "new") {
    let newToDo = prompt("Enter new ToDo");
    toDos.push(newToDo);
  } else if (input === "delete") {
    let index = prompt("Enter index of toDo to delete.");
    toDos.splice((index - 1), 1);
  }
  input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP!");
