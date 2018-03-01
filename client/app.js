var socket = io();

$('form').submit(function () {
  var dispMsg = $('#initials').val() + ' says: ';
  var text = $('#message').val();
  dispMsg += text
  socket.emit('message', dispMsg);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});