let health = 5;
number = 0;
const result = document.getElementById("result");

number = Math.floor(Math.random() * 10);

function generateCpuNumber() {
  number = Math.floor(Math.random() * 10);
}
window.onload = function () {
  generateCpuNumber;
  
};
document
  .querySelector("#guessButton")
  .addEventListener("click", function start() {
    guessNumber = Number(document.getElementById("guessNumber").value);
    if (guessNumber == number && health > 0) {
      if (confirm("داداش عالییی بود میخوای دوباره بازی کنی؟؟")) {
        reset();
      }
    } else {
      if (guessNumber == "") {
        showMessage("داداش هنوز عددی حدس نزدی که!!");
      } else if (guessNumber < number) {
        showMessage("بروو بالا ترر");
        decreaseHealth();
      } else {
        showMessage("خیلییی گفتی چخبرتهههه؟؟!");
        decreaseHealth();
      }
    }
  });

function decreaseHealth() {
  if (health <= 1) {
    // alert("you die");
    if (confirm("اووو متاسفم که نتونستیی میخوای یبار دیگه بازی کنی؟؟")) {
      reset();
    }
    return;
  }
  const healthEle = document.getElementById("heart" + health);
  healthEle.src = "src/images/heart-off.png";
  health--;
}

function showMessage(message) {
  result.innerHTML = message;
}

function reset() {
  generateCpuNumber();
  health = 5;
  for (let index = 1; index <= 5; index++) {
    healthEle = document.getElementById("heart" + index);
    healthEle.src = "src/images/heart.png";
  }
  document.getElementById("guessNumber").value = "";
  showMessage("");
}
