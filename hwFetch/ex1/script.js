document.getElementById("btn").addEventListener("click", () => {
   nameToCheck();
});

function nameToCheck() {
   let nameToCheckinput = document.getElementById("nameToCheck").value;
   let agify = fetch("https://api.agify.io/?name=" + nameToCheckinput + "")
      .then((response) => response.json())
      .then((data) => JSON.stringify(data))
      .then((parseData) => JSON.parse(parseData))
      .then((object) => printHtml(object));
}

function printHtml(object) {
   document.getElementById("newDiv").innerHTML = "";
   document.getElementById(
      "newDiv"
   ).innerHTML = `<b>Name: </b>${object.name}<br/>
<b>Possible age: </b>${object.age}`;
}
