const btnNotif = document.getElementById("show-notif");
const notifEl = document.querySelector(".notifications");

const notifText = ["Message one", "Message two", "Message three"];
const notifColor = ["red", "blue", "orange"];

function displayNotif() {
  const notif = document.createElement("div");
  notif.classList.add("notification");

  const indexColor = Math.floor(Math.random() * notifColor.length);
  const indexText = Math.floor(Math.random() * notifText.length);

  notif.innerText = notifText[indexText];
  notif.style.color = notifColor[indexColor];

  notifEl.appendChild(notif);
  clearNotif();
}

function clearNotif() {
  const allNotif = document.querySelectorAll(".notification");

  allNotif.forEach((el) => {
    setTimeout(() => {
      el.style.display = "none";
    }, 3000);
  });
}
//Clear after white

btnNotif.addEventListener("click", displayNotif);
