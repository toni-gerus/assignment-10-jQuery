$(document).ready(() => {


  $('.hulk').hide();
  $('.spider').hide();
  $('.park').hide();
  $('.kong').hide();

  $('#img1').hide();
  $('#img2').hide();
  $('#img3').hide();
  $('#img4').hide();

$('#hulk1').on('click', () => {
  $('.hulk').toggle();
});
$('#hulk2').on('click', () => {
  $('#img1').toggle();
});

$('#spider1').on('click', () => {
  $('.spider').toggle();
});
$('#spider2').on('click', () => {
  $('#img2').toggle();
});

$('#park1').on('click', () => {
  $('.park').toggle();
});
$('#park2').on('click', () => {
  $('#img3').toggle();
});

$('#kong1').on('click', () => {
  $('.kong').toggle();
});
$('#kong2').on('click', () => {
  $('#img4').toggle();
});

});
