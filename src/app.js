/* eslint-disable */
import "bootstrap";
import "./style.css";

//cuando el mavegador renderice el html, entonces
//ejecutará lo siguiente:

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  //Math.floor para que me incluya el valor 0, que es el primer elemento de cada arreglo
  let randomWhen = Math.floor(Math.random() * when.length); // lo multiplico por el número de elementos del arreglo;
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);

  let resultado =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
  console.log(resultado);
};
