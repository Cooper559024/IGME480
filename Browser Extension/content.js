const text = document.querySelectorAll(" p, li, td, caption");

let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap"
);
document.head.appendChild(link);

for (let i = 0; i < text.length; i++) {
  if (text[i].innerHTML.includes("a" || "e" || "i" || "o" || "u")) {
    let content = text[i].innerHTML;
    let individual = content.split("");

    for (let j = 0; j < individual.length; j++) {
      if (individual[j] == "a") {
        individual[j] =
          '<span style="font-family: Comic Neue; color: #FF0000;">a</span>';
      } else if (individual[j] == "e") {
        individual[j] =
          '<span style="font-family: Comic Neue; color: #FF0000;">e</span>';
      } else if (individual[j] == "i") {
        individual[j] =
          '<span style="font-family: Comic Neue; color: #FF0000;">i</span>';
      } else if (individual[j] == "o") {
        individual[j] =
          '<span style="font-family: Comic Neue; color: #FF0000;">o</span>';
      } else if (individual[j] == "u") {
        individual[j] =
          '<span style="font-family: Comic Neue; color: #FF0000;">u</span>';
      }
    }

    text[i].innerHTML = individual.join("");
  }
}
