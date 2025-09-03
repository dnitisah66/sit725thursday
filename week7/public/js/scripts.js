$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        alert("Thanks for clicking me. Hope you have a nice day!");
    });
    $('.collapsible').collapsible();
    $('.modal').modal();
});


const socket = io();

socket.on('number', (msg) => {
  console.log("Received from server:", msg); // Debug log
  const numberElem = document.getElementById('number');
  if (numberElem) {
    numberElem.innerText = msg;
  }
});
