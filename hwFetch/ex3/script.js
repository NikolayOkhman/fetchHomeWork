function apiCheck() {
   setTimeout(() => {
      fetch("https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
         .then((response) => response.json())
         .then((object) => bitCoinCheck(object));
   }, 4000);
}

let btc = 0;
function bitCoinCheck(object) {
   if (object.lastPrice > btc) {
      let priceTxt = document.createTextNode(
         Math.floor(object.lastPrice) + " $"
      );

      document.getElementById("priceP").innerText = "";
      document.getElementById("priceP").appendChild(priceTxt);
      document.getElementById("priceP").style.color = "green";

      console.log("up " + object.lastPrice);
   } else {
      let priceTxt = document.createTextNode(
         Math.floor(object.lastPrice) + " $"
      );

      document.getElementById("priceP").innerText = "";
      document.getElementById("priceP").appendChild(priceTxt);
      document.getElementById("priceP").style.color = "red";
      console.log("down " + object.lastPrice);
   }
   btc = object.lastPrice;
   apiCheck();
}

apiCheck();
