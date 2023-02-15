// // let newImg = document.createElement("img");
// // newImg.setAttribute("src", "https://go-apod.herokuapp.com/image");
// // document.getElementById("imgDiv").appendChild(newImg);

// let agify = fetch("https://go-apod.herokuapp.com/apod")
//    .then((response) => response.json())
//    .then((data) => JSON.stringify(data))
//    .then((stringData) => setLocal(stringData));

// function setLocal(stringData) {
//    if (!localStorage.getItem("imgStorage")) {
//       localStorage.setItem("imgStorage", stringData.url);
//    }
// }

// // function printHtml(object) {
// //    document.getElementById("txtDiv").innerHTML = "";
// //    document.getElementById(
// //       "txtDiv"
// //    ).innerHTML = `<br/><b> Date: </b>${object.date}<br/><br/>
// //         <b>Description: </b>${object.explanation}`;
// // }

let agify = fetch("https://go-apod.herokuapp.com/apod")
   .then((response) => response.json())
   .then((json) => createHtml(json));

function createHtml(json) {
   console.log(json);
   let titleTxt = document.createTextNode(json.title);
   document.getElementById("titleDiv").appendChild(titleTxt);

   let newImg = document.createElement("img");
   newImg.setAttribute("src", json.url);
   document.getElementById("imgDiv").appendChild(newImg);

   let newTxt = document.createTextNode(json.explanation);
   document.getElementById("txtDiv").appendChild(newTxt);
   localCheck(json);
}

function localCheck(json) {
   if (!localStorage.getItem("apiObjects", json)) {
      localStorage.setItem("apiObjects", JSON.stringify(json));
   } else {
      console.log("The Object is alredy exist");
   }
}
