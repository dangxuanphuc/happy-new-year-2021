const body = document.querySelector("body");
const door = document.querySelector("#door");
const doorBtn = document.querySelector("#click");
const leftDoor = document.querySelector("#left-door");
const rightDoor = document.querySelector("#right-door");
const input = document.querySelector("#input");
const name = document.getElementsByClassName("name");
const form = document.querySelector("#form");
const sound = document.querySelector("#sound");

doorBtn.addEventListener("click",openDoor);

function openDoor() {
  body.classList.add("open");
  body.style.overflow ="auto";
  body.style.background = `url(assets/images/background-2.gif)`;
  sound.innerHTML = `<audio src="assets/audio/happy-new-year.mp3" autoplay loop></audio>`;
}
