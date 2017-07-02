$(document).ready(function() {

  var addressId = -1;

  $('#req_get').click(function () {
    $.post("/monCompte/test", function (data) {

      addressId = data.addresses[0].id;
      $('#result2').html(data.email);
      $.each(data.addresses, function(index, value){
        console.log('value');
        $('#result2').html($('#result2').html() + value.rue)

      });
    });
  });

  $('#set_address').click(function () {
    $.post("/address/" + addressId, {rue:$('#getNewAddress').val()}, function (data) {
        alert(data);
    });
  });
});
