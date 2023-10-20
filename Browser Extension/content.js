const text = document.querySelectorAll("h1, h2, h3, h4, h5 p, li, td, caption");

let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap"
);
document.head.appendChild(link);

for (let i = 0; i < text.length; i++) {
  if (text[i].innerHTML.includes("t")) {
    let content = text[i].innerHTML;
    let individual = content.split("");

    for (let j = 0; j < individual.length; j++) {
      if (individual[j] === "t") {
        individual[j] =
          '<span style="font-family: Comic Neue; font-size: 1.5em; color: #ff0000;">t</span>';
      } else if (individual[j] === "T") {
        individual[j] =
          '<span style="font-family: Comic Neue; font-size: 1.5em; color: #ff0000;">T</span>';
      }
    }

    text[i].innerHTML = individual.join("");
  }
}
