/* eslint-disable */
import "bootstrap";
import "./style.css";

function excusa() {
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
  let randomWhen = Math.floor(Math.random() * when.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWho = Math.floor(Math.random() * who.length);

  let resultado =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
  console.log(resultado);

  document.getElementById("excusa").innerHTML = resultado;
}

window.onload = function() {
  //write your code here
  excusa();
};

document.querySelector("button").addEventListener("click", excusa);
