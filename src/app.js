import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("titulo").innerHTML = dominio();
  console.log("Hello Rigo from the console!");
};

const dominio = () => {
  let newDominio = " ";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".es"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let o = 0; o < adj.length; o++) {
      for (let p = 0; p < noun.length; p++) {
        for (let u = 0; u < ext.length; u++) {
          newDominio += pronoun[i] + adj[o] + noun[p] + ext[u] + "<br>";
        }
      }
    }
  }
  return newDominio;
};
