export default function animatNoResult(valueId, valueName)  {
    const animatEmpty = document.querySelector("#animatEmpty");
    const numbersOfCards = document.querySelectorAll(".card-container");
    if (animatEmpty) { 
      if (numbersOfCards.length === 0 && (valueId !== "" || valueName !== "")) {
        animatEmpty.style.display = "flex";
      } else {
        animatEmpty.style.display = "none";
      }
    }
  }
  