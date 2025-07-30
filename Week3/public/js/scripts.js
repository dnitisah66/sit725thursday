$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('#clickMeButton').click(() => {
    alert("Thanks for clicking me. Hope you have a nice day!");
  });
  $('.collapsible').collapsible();
  $('.modal').modal();
});