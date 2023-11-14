$(document).ready(function () {
  /*global io*/
  let socket = io.connect("https://freecodecamp-advancednode.muflihanto.repl.co/");

  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    var messageToSend = $('#m').val();

    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
});
